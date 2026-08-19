(() => {
  const demo = document.querySelector("[data-operations-demo]");

  if (!demo) {
    return;
  }

  const status = demo.querySelector("[data-demo-status]");
  const message = demo.querySelector("[data-demo-message]");
  const sequence = demo.querySelector("[data-demo-sequence]");
  const steps = [...demo.querySelectorAll("[data-demo-step]")];
  const targets = [...demo.querySelectorAll("[data-demo-target]")];
  const states = [
    {
      status: "ERP / New record",
      message: "The ERP holds the order, account, inventory, and control data needed to answer the next question."
    },
    {
      status: "Person / Question asked",
      message: "A colleague asks, \"Can this order ship today?\" without navigating reports or ERP screens."
    },
    {
      status: "Agent / Answer grounded",
      message: "The agent connects stock, account terms, delivery, and control data to answer with operational context."
    },
    {
      status: "Workflow / Approval routed",
      message: "The answer becomes the next controlled action, with the right approver and audit trail intact."
    }
  ];

  const render = (index) => {
    demo.dataset.activeStep = String(index);
    status.textContent = states[index].status;
    message.textContent = states[index].message;
    sequence.textContent = `${String(index + 1).padStart(2, "0")} / 04`;

    steps.forEach((step, stepIndex) => {
      step.classList.toggle("is-current", stepIndex === index);
      step.classList.toggle("is-complete", stepIndex < index);
      targets[stepIndex].setAttribute("aria-pressed", String(stepIndex === index));
    });
  };

  render(0);

  targets.forEach((target) => {
    const index = Number(target.dataset.demoTarget);
    target.addEventListener("pointerenter", () => render(index));
    target.addEventListener("focus", () => render(index));
    target.addEventListener("click", () => render(index));
  });
})();

(() => {
  const canvas = document.querySelector("[data-substrate-waves]");

  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d", { alpha: true });

  if (!context) {
    return;
  }

  // Canvas 2D can't reference CSS custom properties directly, so the signal
  // color is read once here and every rgba() derived from it, avoiding the
  // two-different-hardcoded-hex-values bug that's easy to introduce otherwise.
  const signalHex = getComputedStyle(document.documentElement).getPropertyValue("--signal-lime").trim() || "#c3f400";
  const signalDigits = signalHex.replace("#", "").match(/.{1,2}/g) || ["c3", "f4", "00"];
  const [signalR, signalG, signalB] = signalDigits.map((hex) => parseInt(hex, 16));
  const signalRgba = (alpha) => `rgba(${signalR}, ${signalG}, ${signalB}, ${alpha})`;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0.58, y: 0.48, targetX: 0.58, targetY: 0.48 };
  let width = 0;
  let height = 0;
  let frame = 0;
  let lastFrame = 0;
  let valuePulse = null;
  let nextValuePulse = 800 + Math.random() * 900;
  // Short technical status tokens, not currency figures. This canvas sits
  // behind the broad POSITION claim as well as the ERP demo, and floating
  // dollar amounts read too close to an implied (and unverified) result.
  const pulseTokens = ["SYNCED", "LINKED", "ROUTED", "VERIFIED", "LIVE"];

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw(0);
  };

  const wavePoint = (row, column, phase, rows, columns) => {
    const depth = row / (rows - 1);
    const across = column / (columns - 1);
    const perspective = 0.62 + depth * 0.9;
    const horizon = height * 0.26;
    const amplitude = (11 + depth * 58) * (0.78 + pointer.y * 0.32);
    const pointerPull = Math.exp(-Math.pow((across - pointer.x) * 4.5, 2));
    const baseX = width / 2 + (across * width - width / 2) * perspective;
    const baseY = horizon + Math.pow(depth, 1.58) * (height - horizon * 0.68);
    const wave = Math.sin(column * 0.52 + phase + row * 0.38) * amplitude
      + Math.sin(column * 0.19 - phase * 0.56 + row * 0.71) * amplitude * 0.34;
    const parallaxX = (pointer.x - 0.5) * (1 - depth) * 92;
    const parallaxY = (pointer.y - 0.5) * pointerPull * (18 + depth * 42);

    return { x: baseX + parallaxX, y: baseY + wave + parallaxY };
  };

  const sampleGrid = (points, rowPosition, columnPosition) => {
    const maxRow = points.length - 1;
    const maxColumn = points[0].length - 1;
    const row = Math.max(0, Math.min(maxRow, rowPosition));
    const column = Math.max(0, Math.min(maxColumn, columnPosition));
    const rowStart = Math.floor(row);
    const rowEnd = Math.min(maxRow, rowStart + 1);
    const columnStart = Math.floor(column);
    const columnEnd = Math.min(maxColumn, columnStart + 1);
    const rowMix = row - rowStart;
    const columnMix = column - columnStart;
    const topStart = points[rowStart][columnStart];
    const topEnd = points[rowStart][columnEnd];
    const bottomStart = points[rowEnd][columnStart];
    const bottomEnd = points[rowEnd][columnEnd];
    const top = {
      x: topStart.x + (topEnd.x - topStart.x) * columnMix,
      y: topStart.y + (topEnd.y - topStart.y) * columnMix
    };
    const bottom = {
      x: bottomStart.x + (bottomEnd.x - bottomStart.x) * columnMix,
      y: bottomStart.y + (bottomEnd.y - bottomStart.y) * columnMix
    };

    return {
      x: top.x + (bottom.x - top.x) * rowMix,
      y: top.y + (bottom.y - top.y) * rowMix
    };
  };

  const pingPong = (value) => {
    const wrapped = ((value % 2) + 2) % 2;
    return wrapped <= 1 ? wrapped : 2 - wrapped;
  };

  const drawSnakes = (points, time, rows, columns) => {
    const seconds = time / 1000;
    const snakeHeads = [];
    const snakes = [
      { offset: 0.08, speed: 0.16, row: 0.31, sway: 1.7, length: 18, phase: 0 },
      { offset: 0.72, speed: 0.12, row: 0.49, sway: 2.2, length: 22, phase: 2.1 },
      { offset: 1.26, speed: 0.19, row: 0.67, sway: 1.5, length: 16, phase: 4.4 }
    ];

    snakes.forEach((snake, snakeIndex) => {
      let previousPoint = null;
      let headPoint = null;

      for (let tailIndex = snake.length; tailIndex >= 0; tailIndex--) {
        const sampleTime = seconds - tailIndex * 0.055;
        const across = pingPong(sampleTime * snake.speed + snake.offset);
        const column = across * (columns - 1);
        const row = snake.row * (rows - 1)
          + Math.sin(sampleTime * 1.85 + column * 0.25 + snake.phase) * snake.sway;
        const point = sampleGrid(points, row, column);

        if (previousPoint) {
          const progress = 1 - tailIndex / snake.length;
          context.beginPath();
          context.moveTo(previousPoint.x, previousPoint.y);
          context.lineTo(point.x, point.y);
          context.strokeStyle = signalRgba(0.08 + progress * 0.82);
          context.lineWidth = 1 + progress * 1.8;
          context.stroke();
        }

        previousPoint = point;
        headPoint = point;
      }

      context.beginPath();
      context.arc(headPoint.x, headPoint.y, 6 + snakeIndex * 0.5, 0, Math.PI * 2);
      context.fillStyle = signalRgba(0.13);
      context.fill();
      context.beginPath();
      context.arc(headPoint.x, headPoint.y, 2.2, 0, Math.PI * 2);
      context.fillStyle = signalRgba(0.95);
      context.fill();
      snakeHeads[snakeIndex] = headPoint;
    });

    if (!reducedMotion && !valuePulse && time >= nextValuePulse) {
      valuePulse = {
        snakeIndex: Math.floor(Math.random() * snakeHeads.length),
        token: pulseTokens[Math.floor(Math.random() * pulseTokens.length)],
        startedAt: time
      };
    }

    if (!valuePulse) {
      return;
    }

    const duration = 1450;
    const progress = Math.min(1, (time - valuePulse.startedAt) / duration);
    const head = snakeHeads[valuePulse.snakeIndex];
    const pulse = Math.sin(progress * Math.PI);
    const fade = 1 - Math.pow(progress, 1.7);

    context.beginPath();
    context.arc(head.x, head.y, 7 + pulse * 13, 0, Math.PI * 2);
    context.strokeStyle = signalRgba(fade * 0.58);
    context.lineWidth = 1.5 + pulse * 1.5;
    context.stroke();

    context.save();
    context.globalAlpha = fade;
    context.fillStyle = signalHex;
    context.font = "500 12px 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
    context.textAlign = "center";
    context.textBaseline = "bottom";
    context.fillText(valuePulse.token, head.x, head.y - 17 - progress * 38);
    context.restore();

    if (progress >= 1) {
      valuePulse = null;
      nextValuePulse = time + 700 + Math.random() * 1300;
    }
  };

  function draw(time) {
    context.clearRect(0, 0, width, height);

    const rows = width < 680 ? 12 : 17;
    const columns = width < 680 ? 20 : 32;
    const phase = time * 0.00042;
    const points = Array.from({ length: rows }, (_, row) => (
      Array.from({ length: columns }, (_, column) => wavePoint(row, column, phase, rows, columns))
    ));

    for (let column = 0; column < columns; column += 2) {
      context.beginPath();
      points.forEach((row, rowIndex) => {
        const point = row[column];
        if (rowIndex === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      });
      context.strokeStyle = "rgba(24, 24, 23, 0.1)";
      context.lineWidth = 1;
      context.stroke();
    }

    points.forEach((row, rowIndex) => {
      const depth = rowIndex / (rows - 1);
      context.beginPath();
      row.forEach((point, columnIndex) => {
        if (columnIndex === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      });
      context.strokeStyle = `rgba(24, 24, 23, ${0.085 + depth * 0.16})`;
      context.lineWidth = 0.75 + depth * 0.75;
      context.stroke();
    });

    drawSnakes(points, time, rows, columns);
  }

  const animate = (time) => {
    frame = window.requestAnimationFrame(animate);

    if (document.hidden || time - lastFrame < 32) {
      return;
    }

    lastFrame = time;
    pointer.x += (pointer.targetX - pointer.x) * 0.045;
    pointer.y += (pointer.targetY - pointer.y) * 0.045;
    draw(time);
  };

  window.addEventListener("pointermove", (event) => {
    pointer.targetX = event.clientX / window.innerWidth;
    pointer.targetY = event.clientY / window.innerHeight;
  });

  document.documentElement.addEventListener("pointerleave", () => {
    pointer.targetX = 0.58;
    pointer.targetY = 0.48;
  });

  window.addEventListener("resize", resize);

  resize();
  if (!reducedMotion) frame = window.requestAnimationFrame(animate);
})();

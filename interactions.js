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
  const canvas = document.querySelector("[data-hero-waves]");

  if (!canvas) {
    return;
  }

  const hero = canvas.closest(".hero");
  const context = canvas.getContext("2d", { alpha: true });

  if (!context) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0.58, y: 0.48, targetX: 0.58, targetY: 0.48 };
  let width = 0;
  let height = 0;
  let frame = 0;
  let lastFrame = 0;
  let visible = true;
  let valuePulse = null;
  let nextValuePulse = 800 + Math.random() * 900;
  const pulseAmounts = ["+$480", "+$1,240", "+$2,680", "+$4,320", "+$8,950"];

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
          context.strokeStyle = `rgba(49, 92, 255, ${0.08 + progress * 0.82})`;
          context.lineWidth = 1 + progress * 1.8;
          context.stroke();
        }

        previousPoint = point;
        headPoint = point;
      }

      context.beginPath();
      context.arc(headPoint.x, headPoint.y, 6 + snakeIndex * 0.5, 0, Math.PI * 2);
      context.fillStyle = "rgba(49, 92, 255, 0.13)";
      context.fill();
      context.beginPath();
      context.arc(headPoint.x, headPoint.y, 2.2, 0, Math.PI * 2);
      context.fillStyle = "rgba(49, 92, 255, 0.95)";
      context.fill();
      snakeHeads[snakeIndex] = headPoint;
    });

    if (!reducedMotion && !valuePulse && time >= nextValuePulse) {
      valuePulse = {
        snakeIndex: Math.floor(Math.random() * snakeHeads.length),
        amount: pulseAmounts[Math.floor(Math.random() * pulseAmounts.length)],
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
    context.strokeStyle = `rgba(49, 92, 255, ${fade * 0.58})`;
    context.lineWidth = 1.5 + pulse * 1.5;
    context.stroke();

    context.save();
    context.globalAlpha = fade;
    context.fillStyle = "#315cff";
    context.font = "650 13px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    context.textAlign = "center";
    context.textBaseline = "bottom";
    context.fillText(valuePulse.amount, head.x, head.y - 17 - progress * 38);
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

    if (!visible || document.hidden || time - lastFrame < 32) {
      return;
    }

    lastFrame = time;
    pointer.x += (pointer.targetX - pointer.x) * 0.045;
    pointer.y += (pointer.targetY - pointer.y) * 0.045;
    draw(time);
  };

  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    pointer.targetX = (event.clientX - bounds.left) / bounds.width;
    pointer.targetY = (event.clientY - bounds.top) / bounds.height;
  });

  hero.addEventListener("pointerleave", () => {
    pointer.targetX = 0.58;
    pointer.targetY = 0.48;
  });

  if ("ResizeObserver" in window) {
    new ResizeObserver(resize).observe(hero);
  } else {
    window.addEventListener("resize", resize);
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.05 }).observe(hero);
  }

  resize();
  if (!reducedMotion) frame = window.requestAnimationFrame(animate);
})();

(() => {
  const explorer = document.querySelector("[data-workflow-explorer]");

  if (!explorer) {
    return;
  }

  const workflows = {
    order: {
      label: "Order-to-cash",
      steps: [
        { kind: "ERP event", time: "08:42", title: "Order received", summary: "The ERP records the transaction and anchors every following step.", owner: "ERP", input: "Sales order, customer account, and requested delivery date", agent: "Wait for a validated ERP event before assembling context", control: "Standard ERP validation and ownership rules", writeback: "New order record with its workflow state" },
        { kind: "Agent action", time: "08:42", title: "Context connected", summary: "The agent connects stock, account, pricing, and delivery context around the order.", owner: "Agent", input: "Available stock, account terms, pricing, and delivery context", agent: "Connect the evidence and check it against the operating rules", control: "Confidence threshold and exception boundaries", writeback: "Prepared context attached to the order flow" },
        { kind: "Control point", time: "08:44", title: "Exception routed", summary: "A margin exception goes to the accountable person with the relevant evidence attached.", owner: "Human", input: "Margin exception, commercial context, and recommended action", agent: "Route the exception with a concise decision brief", control: "Named approver accepts, changes, or rejects the recommendation", writeback: "Approval decision and rationale recorded" },
        { kind: "ERP update", time: "08:51", title: "Record advanced", summary: "The approved decision returns to the ERP, preserving the operational audit trail.", owner: "ERP", input: "Approved decision and downstream routing instruction", agent: "Monitor completion and surface any failed handoff", control: "ERP permissions and immutable audit history", writeback: "Released order and next workflow state" }
      ]
    },
    procure: {
      label: "Procure-to-pay",
      steps: [
        { kind: "ERP event", time: "09:10", title: "Requisition raised", summary: "A purchase need enters the ERP with its requester, category, and required date.", owner: "ERP", input: "Requisition, cost centre, category, and required date", agent: "Wait for a complete and validated request", control: "Budget ownership and request completeness", writeback: "New requisition awaiting context" },
        { kind: "Agent action", time: "09:11", title: "Supplier context checked", summary: "Supplier, contract, price, and delivery context are assembled for the request.", owner: "Agent", input: "Approved suppliers, contracts, price history, and delivery performance", agent: "Compare the request with available commercial context", control: "Approved-source policy and comparison threshold", writeback: "Supplier context attached to the requisition" },
        { kind: "Control point", time: "09:16", title: "Exception approved", summary: "A price or supplier exception reaches the right budget owner with supporting evidence.", owner: "Human", input: "Exception type, alternatives, and financial impact", agent: "Prepare the exception and route it to the accountable owner", control: "Budget owner approval and procurement policy", writeback: "Decision and conditions recorded" },
        { kind: "ERP update", time: "09:24", title: "Purchase order released", summary: "The approved request becomes a controlled purchase order in the ERP.", owner: "ERP", input: "Approved supplier, terms, quantity, and delivery instruction", agent: "Confirm that the order was created and routed", control: "ERP release permissions and audit trail", writeback: "Released purchase order" }
      ]
    },
    service: {
      label: "Service-to-cash",
      steps: [
        { kind: "ERP event", time: "10:03", title: "Service case logged", summary: "A customer request enters the service workflow with its account and reported issue.", owner: "ERP", input: "Customer, asset, service request, and reported priority", agent: "Check that the case has enough context to proceed", control: "Case ownership and service entitlement", writeback: "New service case" },
        { kind: "Agent action", time: "10:04", title: "History assembled", summary: "Entitlement, asset history, previous cases, and available skills are brought together.", owner: "Agent", input: "Contract entitlement, asset history, case history, and team capacity", agent: "Assemble the service context and identify likely routing", control: "Entitlement rules and confidence threshold", writeback: "Prepared context and routing suggestion" },
        { kind: "Control point", time: "10:08", title: "Priority confirmed", summary: "A service owner confirms the priority where evidence or entitlement is ambiguous.", owner: "Human", input: "Impact, entitlement, history, and recommended priority", agent: "Present the evidence and explain the routing recommendation", control: "Service owner confirms priority and response path", writeback: "Confirmed priority and owner" },
        { kind: "ERP update", time: "10:12", title: "Work order scheduled", summary: "The agreed action becomes a scheduled work order with clear ownership.", owner: "ERP", input: "Priority, owner, skill requirement, and target response", agent: "Monitor scheduling and flag unresolved dependencies", control: "Scheduling rules and resource permissions", writeback: "Scheduled work order" }
      ]
    },
    close: {
      label: "Month-end close",
      steps: [
        { kind: "ERP event", time: "17:00", title: "Close task opened", summary: "The ERP opens the period-close task with its ledger and reconciliation state.", owner: "ERP", input: "Ledger status, close checklist, and outstanding reconciliations", agent: "Confirm the required close data is available", control: "Finance ownership and close calendar", writeback: "Open close task" },
        { kind: "Agent action", time: "17:03", title: "Variances investigated", summary: "Material variances and incomplete reconciliations are assembled with likely causes.", owner: "Agent", input: "Ledger movements, prior period, reconciliations, and thresholds", agent: "Group exceptions and prepare supporting evidence", control: "Materiality threshold and evidence requirements", writeback: "Variance investigation attached to the close task" },
        { kind: "Control point", time: "17:18", title: "Journal approved", summary: "Finance reviews the proposed treatment and approves or changes the journal.", owner: "Human", input: "Variance evidence, proposed journal, and financial impact", agent: "Explain the proposed treatment and route it to the approver", control: "Segregation of duties and named journal approval", writeback: "Approved journal and rationale" },
        { kind: "ERP update", time: "17:26", title: "Period advanced", summary: "The approved update returns to the ERP and the close checklist advances.", owner: "ERP", input: "Approved journal and completed control evidence", agent: "Verify posting and surface any remaining blocker", control: "Posting permissions and close audit trail", writeback: "Posted journal and updated close state" }
      ]
    }
  };

  const tabs = [...explorer.querySelectorAll("[data-workflow-key]")];
  const tabList = explorer.querySelector("[data-workflow-tabs]");
  const staticTitle = explorer.querySelector("[data-workflow-static-title]");
  const panel = explorer.querySelector("[data-workflow-panel]");
  const stepItems = [...explorer.querySelectorAll("[data-workflow-step-item]")];
  const stepButtons = [...explorer.querySelectorAll("[data-workflow-step]")];
  const detail = explorer.querySelector("[data-workflow-detail]");
  let activeWorkflow = "order";
  let activeStep = 0;
  let detailTimer = 0;

  const setText = (selector, value, root = explorer) => {
    root.querySelector(selector).textContent = value;
  };

  const renderDetail = (stepIndex) => {
    const step = workflows[activeWorkflow].steps[stepIndex];
    window.clearTimeout(detailTimer);
    detail.classList.add("is-changing");

    detailTimer = window.setTimeout(() => {
      setText("[data-detail-index]", `Selected stage ${String(stepIndex + 1).padStart(2, "0")}`);
      setText("[data-detail-title]", step.title);
      setText("[data-detail-summary]", step.summary);
      setText("[data-detail-input]", step.input);
      setText("[data-detail-agent]", step.agent);
      setText("[data-detail-control]", step.control);
      setText("[data-detail-writeback]", step.writeback);
      detail.classList.remove("is-changing");
    }, 140);
  };

  const selectStep = (stepIndex) => {
    activeStep = stepIndex;
    explorer.dataset.activeStep = String(stepIndex);

    stepItems.forEach((item, index) => {
      item.classList.toggle("is-current", index === stepIndex);
      item.classList.toggle("is-complete", index < stepIndex);
      stepButtons[index].setAttribute("aria-pressed", String(index === stepIndex));
    });

    renderDetail(stepIndex);
  };

  const renderWorkflow = (key) => {
    activeWorkflow = key;
    const workflow = workflows[key];

    workflow.steps.forEach((step, index) => {
      const button = stepButtons[index];
      setText("[data-step-kind]", step.kind, button);
      setText("[data-step-time]", step.time, button);
      setText("[data-step-title]", step.title, button);
      setText("[data-step-summary]", step.summary, button);
      setText("[data-step-owner]", step.owner, button);
      button.querySelector("[data-step-owner]").classList.toggle("owner-blue", step.owner === "Agent");
    });

    tabs.forEach((tab) => {
      const selected = tab.dataset.workflowKey === key;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    const activeTab = tabs.find((tab) => tab.dataset.workflowKey === key);
    panel.setAttribute("aria-labelledby", activeTab.id);
    selectStep(0);
  };

  tabList.hidden = false;
  staticTitle.hidden = true;
  stepButtons.forEach((button) => {
    button.disabled = false;
    button.addEventListener("click", () => selectStep(Number(button.dataset.workflowStep)));
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => renderWorkflow(tab.dataset.workflowKey));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      let nextIndex = index;

      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;

      tabs[nextIndex].focus();
      renderWorkflow(tabs[nextIndex].dataset.workflowKey);
    });
  });

  renderWorkflow(activeWorkflow);
})();

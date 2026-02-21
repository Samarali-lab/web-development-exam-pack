const exams = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    n,
    title: `Exam ${n}`,
    examHref: `exams/exam-${n}.html`,
    ansHref: `answers/answer-${n}.html`,
    tags: [
      "html", "css", "selectors", "forms", "tables", "float", "position",
      "js", "dom", "events", "drag"
    ].join(" ")
  };
});

const list = document.getElementById("examList");
const q = document.getElementById("q");

function render(filter = "") {
  list.innerHTML = "";
  const f = filter.trim().toLowerCase();
  const items = exams.filter(e => !f || `${e.title} ${e.tags}`.toLowerCase().includes(f));

  items.forEach(e => {
    const div = document.createElement("div");
    div.className = "examcard";
    div.innerHTML = `
      <h3>${e.title}</h3>
      <p>Traditional pattern · MCQ + Short + Long + Practical</p>
      <div class="btns">
        <a class="btn" href="${e.examHref}">Open Exam</a>
        <a class="btn secondary" href="${e.ansHref}">Answer Key</a>
      </div>
    `;
    list.appendChild(div);
  });
}

render();

q?.addEventListener("input", (e) => render(e.target.value));
{
    const tasks = [
        {
            content: "mleko",
            done: false,
        },
        {
            content: "płatki",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li
            ${task.done ? "style=\"text-decoration: line-through\"" : ""}
            > 
            ${task.content}
            </li>
            `;
        }
        document.querySelector("js-tasks").innerHTML = htmlString; //Błąd w linii 25: Cannot set property 'innerHTML' of null 
    };

    const init = () => {
        render();

        const form = document.querySelector("js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector("js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            });

            render();
        });
    };

    init();
}
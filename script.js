setInterval(() => {
    const data = new Date();
    const option = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    };
    time.innerText = data.toLocaleString("pt-AO", option)
}, 1000);

setInterval(
    () => (time.innerText = new Date().
    toLocaleTimeString('en-US', { hour12: true })),
    1000
);

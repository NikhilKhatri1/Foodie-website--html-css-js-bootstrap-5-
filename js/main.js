// action navbar

// anv hide

//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            // Adjusted the step to slow down the timer further
            step = Math.abs(Math.floor(duration / range)) * 100, // Quadrupling the step to slow down the timer further
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if ((increment === 1 && current >= end) || (increment === -1 && current <= end)) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5897, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7287, 3000);
});

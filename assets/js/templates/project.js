const handleFilters = () => {
    const filters = document.querySelectorAll(".filter");
    filters.forEach(filter => {
        filter.addEventListener("click", (element) => {
            applyFilter(element);
        });
    });

    // filterClear.addEventListener("click", () => {
    //     removeFilters();
    // });
};

window.addEventListener("load", () => {
    handleProjectButtons();
    handleFilters();
})
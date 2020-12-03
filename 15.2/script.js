document.querySelector(".btn").addEventListener("click", () => {
    window.alert(
        `[WxH] \nWindow dimensions including scrollbars: ${window.innerWidth}x${window.innerHeight} px \nDocument dimensions without scrollbars: ${document.documentElement.clientWidth}x${document.documentElement.clientHeight} px \nScreen size: ${window.screen.width}x${window.screen.height} px`
    );
});

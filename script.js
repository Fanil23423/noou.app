if (window.Telegram) {
    Telegram.WebApp.ready();

    const tg = Telegram.WebApp;

    const status = document.getElementById("status");
    if (tg.initDataUnsafe?.user) {
        status.textContent = `Привет, ${tg.initDataUnsafe.user.first_name}!`;
    } else {
        status.textContent = "WebApp";
    }

    document.getElementById("bookBtn").onclick = () => {
        tg.sendData("haircut");
    };

    document.getElementById("priceBtn").onclick = () => {
        tg.sendData("price");
    };

    try { tg.expand(); } catch (e) {}
} else {
    document.getElementById("status").innerText =
        "Открой мини-приложение внутри Telegram!";
}

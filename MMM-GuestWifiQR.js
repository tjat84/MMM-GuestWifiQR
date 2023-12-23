Module.register("MMM-GuestWifiQR", {
    defaults: {
        qrCodeImagePath: "wifi_qrcode.png", // Update with your QR image path
        title: "Guest Wifi",
        width: "150px", // Width of the QR code image
        height: "150px" // Height of the QR code image
    },

    start: function() {
        Log.info("Starting module: " + this.name);
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "wifi-qr-container";
    
        var titleDiv = document.createElement("div");
        titleDiv.className = "wifi-title";
        titleDiv.innerHTML = this.config.title || "Guest Wifi";
        titleDiv.innerHTML = this.config.title.replace(" ", "<br>"); // Replaces the first space with a line break
        wrapper.appendChild(titleDiv);
    
        var qrImage = document.createElement("img");
        qrImage.className = "wifi-qr";
        qrImage.src = this.file(this.config.qrCodeImagePath);
        wrapper.appendChild(qrImage);
    
        return wrapper;
    },

    getStyles: function() {
        return ["MMM-GuestWifiQR.css"];
    },
    
    
    
});

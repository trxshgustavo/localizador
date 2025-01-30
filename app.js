const mp = new MercadoPago('APP_USR-5a00e236-c3a6-446e-b855-e117de0890f8',{
    locale: "es-CL",
});

document.getElementById("checkout-btn").addEventListener("click", async ()=>{
    try{
    const orderData = {
        title: "Mentorias Digitales",
        quantity: 1,
        price: 500000,
    };

    const response = await fetch("http://localhost:3000/create_preference",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
    });

    const preference = await response.json()
    createCheckoutButton(preference.id);
}   catch(error){
    alert("error:(");
}
});

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if(window.checkoutButton) window.checkoutButton.unmount();
        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId,
            },
            customization: {
                texts: {
                valueProp: 'smart_option',
                },
                },
        });
    };

    renderComponent()
};
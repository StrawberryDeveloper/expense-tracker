const list = document.querySelector("#abo-list");

const form = document.querySelector("#abo-form") as HTMLFormElement;
const formName = document.querySelector("#abo-name") as HTMLInputElement;
const formPrice = document.querySelector("#abo-price") as HTMLInputElement;

const totalPrice = document.querySelector("#total-price") as HTMLSpanElement;

let items = JSON.parse(localStorage.getItem("items") || "[]") as AboItem[]

interface AboItem {
    name: string;
    price: string;
}

items.forEach(element => {
    AddItem(element.name, element.price)
});

function AddItem(name : string, price : string) : void{

    const neueCardHTML = `
        <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="font-bold text-xl text-gray-800 tracking-tight">${name}</h3>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Abonnement</p>
                </div>
                <span class="text-2xl font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    ${price}€
                </span>
            </div>
            
            <div class="border-t border-gray-100 pt-3 flex justify-between items-center mt-auto">
                <span class="text-sm text-gray-500">Monatlich</span>
                <button class="cursor-pointer text-sm font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-md transition duration-150">
                    Entfernen
                </button>
            </div>
        </div>
    `;

    const item = document.createElement("div")
    item.className = "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out";

    item.insertAdjacentHTML("beforeend", neueCardHTML)

    item.querySelector("button")?.addEventListener("click", () => {
        item.remove();

        items = items.filter(i => i.name.toLowerCase() !== name.toLowerCase());
        localStorage.setItem("items", JSON.stringify(items))
        UpdateTotal();
    });

    list?.appendChild(item);

    UpdateTotal();
}

function UpdateTotal() : void {
    let ammount : number = 0;

    items.forEach(element => {
        ammount += parseFloat(element.price);
    })

    totalPrice.textContent = ammount.toFixed(2);
}
    
form.addEventListener('submit', (event) => {
    event.preventDefault();

    AddItem(formName.value, formPrice.value)

    items.push({name: formName.value, price : formPrice.value})

    localStorage.setItem("items", JSON.stringify(items))

    form?.reset();
});

const SlideDelay = 5
const ImageElement = document.getElementById("pgImage")
const CustomElements = [document.getElementById("locationName"), document.getElementById("locationDescription")]

let Index = 1

const AssetTable = [
    ["assets/locations/itanagar.jpg", "Tawang Monastery", "Tawang, Arunachal Pradesh"],
    ["assets/locations/charminar.jpg", "Char Minar", "Hyderabad, Telangana"],
    ["assets/locations/amerfort.jpg", "Amber Fort", "Amber, Rajasthan"]
]

setInterval(function(){
    
    for (let i = 0; i < CustomElements.length; i++) {
        CustomElements[i].style.opacity = "0";
        setTimeout(function(pIndex){
            CustomElements[i].innerHTML = AssetTable[pIndex][1 + i]
            CustomElements[i].style.opacity = "1";
        }, 500, Index)
    }

    ImageElement.src = AssetTable[Index][0]

    Index = (Index + 1) % AssetTable.length

}, 5000)


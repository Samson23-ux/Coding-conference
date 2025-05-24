const userImage = document.querySelector(".upload_icon");
const inputField = document.querySelector("#upload_image");
const dropArea = document.querySelector(".drop_area");
const dragDrop = document.querySelector(".upload_item2 p");
const fileInfo = document.querySelector(".file_info")
const editButton = document.querySelector(".edit");
const iconInfo1 = document.querySelector(".info_icon img")
const removeImage = document.createElement("button");
const changeImage = document.createElement("button");
let uploadedImage;
const maxSize = 500 * 10 ** 3




function uploadImage() {
    uploadedImage = URL.createObjectURL(inputField.files[0])

    if (inputField.files[0].size > maxSize) {
        fileInfo.textContent = "File too large. Please upload a file under 500KB"
        fileInfo.style.color = " #f67464"
        iconInfo1.src = "./assets/images/icon-info2.png"
        return
    }

    if (inputField.files[0].type !== "image/jpeg" && inputField.files[0].type !== "image/png") {
        alert("File must be png or jpg/jpeg")
        return
    }

    userImage.src = uploadedImage

    dragDrop.textContent = ""
    removeImage.textContent = "Remove Image";
    changeImage.textContent = "Change Image"
    editButton.append(removeImage);
    editButton.append(changeImage);
    removeImage.classList.add("edit-btn");
    changeImage.classList.add("edit-btn");

    changeImage.addEventListener("click", () => {
        inputField.click(); // Trigger the file input
    });

    removeImage.addEventListener("click", () => {
        userImage.src = "./assets/images/icon-upload.svg"
    });
};

inputField.addEventListener("change", uploadImage);



//enable drag and drop
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault()
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault()
    inputField.files = e.dataTransfer.files
    uploadImage()
});
const FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png'];
const avatarDefault = 'img/muffin-grey.svg';

const adForm = document.querySelector('.ad-form');
const adFormField = adForm.querySelector('.ad-form__field');
const adFormHeaderInput = adFormField.querySelector('.ad-form-header__input');
const adFormHeaderPreview = adForm.querySelector('.ad-form-header__preview');
const previewAvatar = adFormHeaderPreview.querySelector('img');

const adFormUpload = adForm.querySelector('.ad-form__upload');
const adFormInput = adFormUpload.querySelector('.ad-form__input');
const adFormPhoto = adForm.querySelector('.ad-form__photo');

const adFormInputLoadHandler = (input, preview) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      if (input === adFormHeaderInput) {
        preview.src = reader.result;
      }
      if (input === adFormInput) {
        if (preview.children.length >= 1) {
          preview.children[0].remove();
        }
        preview.insertAdjacentHTML('beforeend',
          `<img src="${reader.result}" alt="Превью комнаты" width="70" height="70" style="object-fit: contain">`);
      }
    });
    reader.readAsDataURL(file);
  }
};

adFormHeaderInput.addEventListener('change',
  () => adFormInputLoadHandler(adFormHeaderInput, previewAvatar));

adFormInput.addEventListener('change',
  () => adFormInputLoadHandler(adFormInput, adFormPhoto));

const inputFileReset = () => {
  previewAvatar.src = avatarDefault;
  const adFormPhotoList = adFormPhoto.querySelectorAll('img');
  adFormPhotoList.forEach((item) => item.remove());
};

export {inputFileReset};

function getProperties() {
  const url = 'https://api.simplyrets.com/properties';
  const properties = [];

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.setRequestHeader('Accept', '*/*');
  xhr.setRequestHeader('Authorization', 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(JSON.parse(xhr.responseText));
      JSON.parse(xhr.responseText);
    }
  };

  xhr.send();
}

module.exports = getProperties;

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/farhan.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-farhan");
      const kelasElement = document.getElementById("kelas-farhan");
      const npmElement = document.getElementById("npm-farhan");
      const kontakElement = document.getElementById("kontak-farhan");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
  });

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/ludha.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-ludha");
      const kelasElement = document.getElementById("kelas-ludha");
      const npmElement = document.getElementById("npm-ludha");
      const kontakElement = document.getElementById("kontak-ludha");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
});
const userDataArray = [];
const bookingId = '123'; // Set your desired booking ID

document.getElementById('des').addEventListener('click', function () {
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const number = document.getElementById('number').value;
    const destination = document.getElementById('destination').value;

    if (!name || !address || !number || !destination) {
        alert('Please fill in all fields.');
        return;
    }

    const userData = {
        name: name,
        address: address,
        number: number,
        destination: destination
    };

    userDataArray.push(userData);

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('number').value = '';
    document.getElementById('destination').value = '';
});

document.getElementById('container2').addEventListener('click', function () {
    const enteredId = prompt('Enter Booking ID:');

    if (enteredId === bookingId) {
        document.getElementById('container').innerText = JSON.stringify(userDataArray);
    } else {
        alert('Invalid ID. Access denied.');
    }
});

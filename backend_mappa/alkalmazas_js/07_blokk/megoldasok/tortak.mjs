async function torol(id) {
    try {
        const response = await fetch(`/api/cakes-backend/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const vissza = await response.json();

        if (response.ok) {
            window.alert(vissza.msg);
            window.location.href = '/api/cakes-backend';
        } else {
            window.alert(vissza.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
}

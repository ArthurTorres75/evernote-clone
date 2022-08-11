export const addNote = (note) => {
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection("notes")
            .add({
                ...note,
                favorite: false,
                createdAt: new Date(),
            })
            .then(() => {
                // dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
            })
            .catch((err) => {
                console.log(err)
            });
    };
};

export const deleteNote = (note) => {

    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        console.log('note id', note.id)
        const firestore = getFirestore();
        firestore
            .collection("notes").doc(note.id)
            .delete()
            .then(() => {
                console.log('delete successfully')
            })
            .catch((err) => {
                console.log(err)
            });
    };

}

export const toggleFav = (note) => {

    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const favstatus = !note.favorite
        const firestore = getFirestore();
        firestore
            .collection("notes").doc(note.id).update({
                favorite: favstatus
            }).then(() => {
                console.log('toggle favorite success');
            }).catch(err => {
                console.log(err);
            })
    };

}

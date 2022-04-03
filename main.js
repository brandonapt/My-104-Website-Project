    var dialog = document.querySelector('dialog');
    var showDialogButton = document.getElementById('show-dialog')
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
    dialog.querySelector('#next').addEventListener('click', async function () {
        window.open('https://www.troop104.com', '_blank')
        dialog.close();

    })



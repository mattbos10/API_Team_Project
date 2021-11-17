
    $(document).ready(function() {
        $("#content").hide();
    });

    document.getElementById(`video`).addEventListener('ended',myHandler,false);

    function myHandler(e) {
        $("#content").show();
    }

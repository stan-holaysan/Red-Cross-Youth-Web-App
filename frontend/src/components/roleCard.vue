<template>
    <div class='d-flex align-content-start flex-wrap mr-4'>
    <!-- added mr for space -->
    <div class='col-sm-2'>
        <div class='card' style='width: 18rem;'>
            <img class='card-img-top' src='<%= person.pic%>' alt='NO IMAGE FOUND' width=100% height=300>
            <div class='card-body'>
                <form method='GET' action=''>
                    <input type='hidden' name='ID' value='{ <%= person.id%>'>
                    <strong></strong>
                    <!-- originally supposed to be LName -->
                    <!--  -->
                    <br>
                    <span class='text-muted'>ID: </span>
                    <br>
                    <span class='text-muted'>Recruited:</span>
                    <br>
                    <span class='text-muted'>Contact:</span>
                    <br>
                    <span class='text-muted'></span>
                    <br>
                    <span class='text-muted'></span>
                    <br>
                    <input type='submit' value='View Profile' class='btn btn-outline-secondary'>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'rolecard'
}
</script>


<template>
    <div v-show="show">
        <div class="container-2">
            <div class="star-path">
                <img src="../components/icons/star-path-edu.svg">
            </div>
            <div class="display-aboutme">
                <div class="list-aboutme list-achievements-right">
                    <div class="periode-achievements periode-aboutme-left">
                        <p class="date-periode-aboutme">2014</p>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-3.svg">
                    </div>
                    <div class="desc-aboutme desc-aboutme-right">
                        <p class="font-32-semibold">3rd place winner for women’s chess competition</p>
                        <p class="font-24-medium">Organized by Department of Education of Bojonegoro Regency</p>
                    </div>
                </div>
                <div class="list-aboutme list-achievements-left">
                    <div class="desc-aboutme desc-aboutme-left">
                        <p class="font-32-semibold title-aboutme-left">3rd place winner for women’s chess competition
                        </p>
                        <p class="font-24-medium major-aboutme-left">Organized by Department of Education of Bojonegoro
                            Regency</p>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-1.svg">
                    </div>
                    <div class="periode-achievements periode-aboutme-right">
                        <p class="date-periode-aboutme">2013</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: [
        "show"
    ]
}
</script>
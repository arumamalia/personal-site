<template>
    <div v-show="show">
        <div class="container-2">
            <div class="star-path">
                <img src="../components/icons/path-languages.svg">
            </div>
            <div class="display-aboutme">
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="periode-aboutme periode-aboutme-left">
                            <div class="date-periode-aboutme">2014</div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-3.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-18-semibold">3rd place winner for women’s chess competition</div>
                            <div class="font-16-medium">Organized by Department of Education of Bojonegoro Regency</div>
                        </div>
                    </div>
                </div>
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="desc-aboutme desc-aboutme-left">
                            <div class="font-18-semibold title-aboutme-left">3rd place winner for women’s chess competition
                            </div>
                            <div class="font-16-medium major-aboutme-left">Organized by Department of Education of Bojonegoro
                                Regency</div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-1.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="periode-aboutme periode-aboutme-right">
                            <div class="date-periode-aboutme">2013</div>
                        </div>
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
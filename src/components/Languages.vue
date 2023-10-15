<template>
    <div v-show="show" class="container-2">
        <div class="star-path">
            <img src="../components/icons/path-languages.svg">
        </div>
        <div class="display-aboutme">
            <div class="list-aboutme">
                <div class="container-desc-left">
                </div>
                <div class="star">
                    <img src="../components/icons/star-2.svg">
                </div>
                <div class="container-desc-right">
                    <div class="desc-aboutme desc-aboutme-right">
                        <p class="font-16-semibold">English - Upper Intermediate</p>
                    </div>
                </div>  
            </div>
            <div class="list-aboutme">
                <div class="container-desc-left">
                    <div class="desc-aboutme desc-aboutme-right">
                        <p class="font-16-semibold">Bahasa Indonesia - Native</p>
                    </div>
                </div>    
                <div class="star">
                    <img src="../components/icons/star-2.svg">
                </div>
                <div class="container-desc-right">
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
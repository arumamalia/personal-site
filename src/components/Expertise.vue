<template>
    <div v-show="show">
        <div class="container-2">
            <div class="expertise"> 
                <div class="sub-list-expertise">
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Javascript - Node.js</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">PHP - Code Igniter</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Golang - Echo</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">SQL - MySQL</div>
                    </div>
                </div>
                <div class="sub-list-expertise">
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">NoSQL - Mongoose</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">AWS</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">HTML</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">CSS</div>
                    </div>
                </div>
                <div class="sub-list-expertise">
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Vue.js</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Figma</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Adobe Photoshop</div>
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
<template>
    <div v-show="show" class="expertise container-2">
        <div class="sub-list-expertise">
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">Javascript - Node.js</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">PHP - Code Igniter</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">Golang - Echo</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">SQL - MySQL</p>
            </div>
        </div>
        <div class="sub-list-expertise">
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">NoSQL - Mongoose</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">AWS</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">HTML</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">CSS</p>
            </div>
        </div>
        <div class="sub-list-expertise">
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">Vue.js</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">Figma</p>
            </div>
            <div class="list-expertise">
                <img src="../components/icons/list-star.svg">
                <p class="font-24-semibold">Adobe Photoshop</p>
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
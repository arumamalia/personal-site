<template>
    <div v-show="show">
        <div class="container-2">
            <div class="expertise"> 
                <div class="sub-list-expertise">
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">HTML</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">PHP (Codeigniter)</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Github</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Agile Development</div>
                    </div>
                </div>
                <div class="sub-list-expertise">
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Go-Lang (Echo)</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">SQL, MySQL</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Ms Visual Studio</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Git</div>
                    </div>
                </div>
                <div class="sub-list-expertise">
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">CSS (Bootstrap, Tailwind)</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Javascript (JQuery, Vue.js)</div>
                    </div>
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Figma</div>
                    </div>                    
                    <div class="list-expertise">
                        <img src="../components/icons/list-star.svg">
                        <div class="font-16-semibold">Jira</div>
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
<template>
    <div v-show="show">
        <div class="container-2" style="margin-bottom: 350px;">
            <div class="star-path path-exp">
                <img src="../components/icons/path-experience.svg">
            </div>
            <div class="display-aboutme">
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="periode-aboutme periode-aboutme-left">
                            <div class="date-periode-aboutme">Feb 2022 - Present</div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-3.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold title-aboutme-right">KB Finansia Multi Finance (Multifinance Company)</div>
                            <div class="desc-univ">
                                <div class="font-18-semibold">Front End Developer</div>
                                <ul class="list-activities">
                                    <li>Collaborating with UX/UI designers and backend developers to translate design concepts into functional and visually appealing web interfaces.</li>
                                    <li>Developing and maintaining user-friendly and secure CMS interfaces using PHP with CI framework, HTML, Bootstrap, and javaScript with jQuery library.</li>
                                    <li>Optimizing websites for performance across different browsers.</li>
                                    <li>Writing unit tests to ensure code quality and maintainability.</li>
                                    <li>Refactor and restructure existing codebases to improve maintainability, performance, and efficiency.</li>
                                    <li>Debug and fix any issues or bugs that arise during development and post-release.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold title-aboutme-right">KB Finansia Multi Finance (Multifinance Company)</div>
                            <div class="desc-univ">
                                <div class="font-18-semibold">Back End Developer</div>
                                <ul class="list-activities">
                                    <li>Designing and building a web API that adheres to the REST architectural style using Golang with Echo framework.</li>
                                    <li>Incorporating functionalities within the project that enable users to retrieve and manipulate specific data from a database using SQL queries.</li>
                                    <li>Designing the database structure and implementing it using mySQL server.</li>
                                    <li>Refining and restructuring the code to enhance its efficiency, readability, and maintainability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-1.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="periode-aboutme periode-aboutme-right">
                            <div class="date-periode-aboutme">Jul 2021 - Jan 2022</div>
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
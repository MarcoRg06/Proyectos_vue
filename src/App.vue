<script setup>
</script>

<template>
    <div class="container">
        <div id="app">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/">Home</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    About
                                </a>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/about">About</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <!-- <nav>
   </nav> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped></style>

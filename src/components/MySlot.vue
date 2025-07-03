

<template>
    <div class="container">
        <div class="row justify-content-center pt-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <slot name="header"></slot>
                    </div>
                    <div class="card-body">
                        <slot></slot>
                    </div>
                    <div class="card-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<template>
    <div class="wrapper">
        <div class="nav">
            <buii-icon class="nav-left" name="icon-search" size="40px"></buii-icon>
            <text class="navText">我的</text>
            <buii-icon class="nav-right" name="icon-zhuan"></buii-icon>
        </div>
        <div class="cell-border"></div>
        <list class="list">
            <cell class="mine-info">
                <image class="mine-info-image" src="//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg"></image>
                <div class="mine-info-content">
                    <text class="mine-info-content-usernName">egfsgdfgdfgdfg</text>
                    <div class="mine-info-content-data">
                        <bui-icon name="icon-search" size="20px"></bui-icon>
                        <text>0</text>
                        <text>|</text>
                        <bui-icon name="icon-search" size="20px"></bui-icon>
                        <text>0</text>
                        <text>|</text>
                        <bui-icon name="icon-search" size="20px"></bui-icon>
                        <text>100</text>
                    </div>
                </div>
                <bui-icon class="mine-info-right" name="icon-zhuan"></bui-icon>
            </cell>
            <cell class="cell-border"></cell>
            <cell class="mine-function">

            </cell>
            <cell class="mine-external">

            </cell>
        </list>
    </div>
</template>
<style scoped>
    .wrapper{

    }
    .nav{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:750px;
        height:100px;
    }
    .nav-left{
        justify-content: flex-start;
    }
    .navText{
        justify-content: center;
    }
    .nav-right{
        justify-content: flex-end;
    }
    .list{
        width:750px;
        height:1230px;
    }
    .cell-border{
        width:750px;
        height:24px;
        background-color: rgba(0, 0, 0, 0.27);
    }
    .mine-info{
        flex-direction:row;
        width:750px;
        height:148px;
        margin: 40px;
        align-items: center;
    }
    .mine-info-image{
        width:100px;
        height:100px;
        margin-left: 24px;
        margin-right: 24px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    .mine-info-content{
        flex-direction: column;
        justify-content: space-between;
    }
    .mine-info-content-usernName{
        align-self: flex-start;
        font-size:20px;
    }
    .mine-info-content-data{
        align-self: flex-end;
        flex-direction: row;
    }
    .mine-info-right{
        align-self: flex-end;
    }
</style>

<script>
    if(process.env.NODE_ENV==='development')require('Config')
    import buiIcon from 'Eros/bui/components/bui-icon.vue'
    export default{
        components:{buiIcon}
    }
</script>
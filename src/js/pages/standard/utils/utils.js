let utilFunc = {
    initIconFont(){
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': 'iconfont',
            'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
        });
    }
};

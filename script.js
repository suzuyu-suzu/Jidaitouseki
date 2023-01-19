// Text to animate
/*var text = `足元から不意に地面がなくなり、自分はどうやら落ちているのだと認識する。

暗闇に飲み込まれる瞬間考えていたのは、家族のことでも、自分がこれから受けるだろう苦しみのことでもなかった。もとより私は不幸な星の生まれである。全てをはなから諦める若干覚悟めいた思いを、幼い頃から抱えていた。ただ、穴の中は外の世界より残酷なのか、それとも少しは慈悲深いのか、僅かな期待を握りしめ、私は穴の下へ向かった。

自他境界が認識できないほどの暗闇と、一秒ごとに増してゆく重力ばかりが気を削いだ。けれども空気は心地よく冷ややかで、私は少し安心した。外の世界の大気は汚れている......繰り返し熱弁してきた教師の顔を思い出す。

未来政府は地獄に近い。彼らはあらゆる施策を間違えた。気候変動を争いで解決せんと試む一方、民衆の文化をことごとく焼き捨てた。朝な夕なに繰り広げられる暴力の渦、注ぐ有害物質の雨。穴の上下にかかわらず、大地は静かに死んでいる。

不治の病が流行り始めて数十年、乾ききった空気には菌体の死骸が潜み、ありとあらゆる手段をもって、我々人類を追い詰める。進歩を放棄してもなお。`;

// Select the element to animate
var animatedText = document.querySelector('.animated-text');

// Initialize the animation
animateOnScroll(animatedText);

// The animation function
function animateOnScroll(element) {
  var textArray = text.split('');
  var loopTime = 50;
  var currentIndex = 0;
  var animationTriggered = false;

  window.addEventListener('scroll', function () {
    // Check if the element is in view
    var bounding = element.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      if (!animationTriggered) {
        setInterval(function () {
          if (currentIndex < textArray.length) {
            element.innerHTML += textArray[currentIndex];
            currentIndex++;
          }
        }, loopTime);
        animationTriggered = true;
      }
    }
  });
}*/
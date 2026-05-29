
const establishLinks =  function() {

    const cuteLinks = [
        "https://www.instagram.com/p/DYKi7JwqP_l/",
        "https://www.instagram.com/p/DXxjRJvvSeu/",
        "https://www.instagram.com/p/DXwGYRlCi9-/",
        "https://www.instagram.com/p/DXAQ_p-E4gb/",
        "https://www.instagram.com/p/DW629QBo5Ml/",
        "https://www.instagram.com/p/DS3IERVkbWJ/",
        "https://www.instagram.com/p/DR5zodLE-hI/",
        "https://www.instagram.com/reels/DWl0JOYDZ5q/",
        "https://www.instagram.com/reels/DWmTzerkaQ3/",
        "https://www.instagram.com/reels/DVgrFgClyzn/",
        "https://www.instagram.com/reels/DSqFjG5ie1O/",
        "https://www.instagram.com/reels/DWASo-QjO6b/",
        "https://www.youtube.com/watch?v=zJU2s-gfBYo",
        "https://www.instagram.com/reels/DL4jx6huz9o/"
    ];
    const arduinoLinks = [
        "https://www.instagram.com/p/DYiBMM4oJSP/",
        "https://www.instagram.com/p/DYzpngyxeF7/",
        "https://www.instagram.com/p/DWfzs6riUU2/",
        "https://www.instagram.com/p/DXwGYRlCi9-/",
        "https://www.instagram.com/p/DXeTSqljAs-/",
        "https://www.instagram.com/p/DWCYk5MkaWh/",
        "https://www.instagram.com/p/DXAQ_p-E4gb/",
        "https://www.instagram.com/p/DXKby7JCnDl/",
        "https://www.instagram.com/p/DW629QBo5Ml/",
        "https://www.instagram.com/p/DSrVVMnDlcN/",
        "https://www.instagram.com/p/DGdiYxEJrkM/",
        "https://www.instagram.com/p/DMiRxD3AFNA/",
        "https://www.instagram.com/reels/DWl0JOYDZ5q/",
        "https://www.instagram.com/reels/DWmTzerkaQ3/",
        "https://www.instagram.com/reels/DVgrFgClyzn/",
        "https://www.instagram.com/reels/DSqFjG5ie1O/",
        "https://www.instagram.com/reels/DWASo-QjO6b/",
        "https://www.youtube.com/watch?v=N-uSTRGhEhs",
        "https://www.youtube.com/watch?v=EJtl-fRrP3k",
        "https://www.youtube.com/watch?v=PKPuBuUgRZY",
        "https://www.youtube.com/watch?v=l5ggH-YhuAw",
        "https://www.youtube.com/watch?v=GoMsm543W9Y",
        "https://www.youtube.com/watch?v=YmmPsDW58Oc"
    ]
    const recycledLinks = [
        "https://www.instagram.com/p/DVnJ499ibBH/",
        "https://www.instagram.com/p/DXAQ_p-E4gb/",
        "https://www.instagram.com/p/DSrVVMnDlcN/",
        "https://www.instagram.com/p/DR5zodLE-hI/",
        "https://www.instagram.com/p/DUZAaMpjyYQ/"
    ]
    const weirdLinks = [
        "https://www.instagram.com/p/DYzpngyxeF7/",
        "https://www.instagram.com/p/DYuWt-AoknH/",
        "https://www.instagram.com/p/DYlk7DWx8Ms/",
        "https://www.instagram.com/p/DWfzs6riUU2/",
        "https://www.instagram.com/p/DXwGYRlCi9-/",
        "https://www.instagram.com/p/DWCYk5MkaWh/",
        "https://www.instagram.com/p/DVOsIibjflS/",
        "https://www.instagram.com/p/DXKby7JCnDl/",
        "https://www.instagram.com/p/DQ43GxVCR0r/",
        "https://www.instagram.com/p/DSrVVMnDlcN/",
        "https://www.instagram.com/p/DVOvVjDDDvv/",
        "https://www.instagram.com/p/DGdiYxEJrkM/",
        "https://www.instagram.com/p/DITts9SNiuF/",
        "https://www.instagram.com/p/DMiRxD3AFNA/"
    ]
    const cursedLinks = [
        "https://www.instagram.com/p/DTYYxl4ku-_/",
        "https://www.instagram.com/p/DYwIXi-jWrL/?img_index=1",
        "https://www.instagram.com/p/DXHcwMVDKYO/",
        "https://www.instagram.com/p/DVoGvhlDrLa/",
        "https://www.youtube.com/watch?v=N-uSTRGhEhs"
        
    ]
    const accessibleLinks = [
        "https://www.instagram.com/p/DYR4ttoBg2p/",
        "https://www.instagram.com/p/DXp6VhNik5p/"
    ]

    // 2. Pick a random index from the list
    var randomIndex = Math.floor(Math.random() * cursedLinks.length);
    const cursedLink = cursedLinks[randomIndex];
    console.log(randomIndex, cursedLink)

    // 3. Assign it to your HTML element (e.g., an <a> tag with id="random-link")
    var linkElement = document.getElementById("cursed");
    if (linkElement) {
        linkElement.href = cursedLink;
    }


    randomIndex = Math.floor(Math.random() * accessibleLinks.length);
    const accessibleLink = accessibleLinks[randomIndex];

     linkElement = document.getElementById("accessible");
    if (linkElement) {
        linkElement.href = accessibleLink;
    }

   randomIndex = Math.floor(Math.random() * arduinoLinks.length);
    const arduinoLink = arduinoLinks[randomIndex];

     linkElement = document.getElementById("arduino");
    if (linkElement) {
        linkElement.href = arduinoLink;
    }

    
   randomIndex = Math.floor(Math.random() * recycledLinks.length);
    const recycledLink = recycledLinks[randomIndex];

     linkElement = document.getElementById("recycled");
    if (linkElement) {
        linkElement.href = recycledLink;
    }
    
     randomIndex = Math.floor(Math.random() * weirdLinks.length);
    const weirdLink = weirdLinks[randomIndex];

     linkElement = document.getElementById("weird");
    if (linkElement) {
        linkElement.href = weirdLink;
    }

       randomIndex = Math.floor(Math.random() * cuteLinks.length);
    const cuteLink = cuteLinks[randomIndex];

     linkElement = document.getElementById("cute");
    if (linkElement) {
        linkElement.href = cuteLink;
    }
};
window.onload = function () {

    // run once on page load
    establishLinks();

    const elements = document.getElementsByClassName('link-button');

    for (let i = 0; i < elements.length; i++) {

        elements[i].addEventListener('click', function (event) {

            event.preventDefault();

            establishLinks();

            setTimeout(() => {

                if (event.ctrlKey || event.metaKey) {
                    window.open(this.href, '_blank');
                } else {
                    window.location.href = this.href;
                }

            }, 0);

        });

    }
};

// Swap the title image src for small screens using matchMedia
function setupTitleImageSwap() {
    const img = document.getElementById('title-img');
    if (!img) return;

    const mobileQuery = window.matchMedia('(max-width: 480px)');

    function applySrc(mq) {
        if (mq.matches) {
            img.src = 'ransomizer.com horizontal.png';
        } else {
            img.src = 'ransomizer.com.png';
        }
    }

    // Initial set
    applySrc(mobileQuery);

    // Listen for changes
    if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', (e) => applySrc(e));
    } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener((e) => applySrc(e));
    }
}

// initialize title image handler after load
window.addEventListener('load', setupTitleImageSwap);
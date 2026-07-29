const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
    "https://bessofloor.com/cdn/shop/files/11072.webp?v=1761831981&width=800",
    "https://bessofloor.com/cdn/shop/files/11071.webp?v=1761831989&width=800",
    "https://bessofloor.com/cdn/shop/files/11073.webp?v=1761831995&width=800",
    "https://bessofloor.com/cdn/shop/files/11074.webp?v=1761832000&width=800",
    "https://bessofloor.com/cdn/shop/files/11076.webp?v=1761831852&width=800",
    "https://bessofloor.com/cdn/shop/files/11075.webp?v=1761831852&width=800",
    "https://bessofloor.com/cdn/shop/files/11077.webp?v=1761831852&width=800",
    "https://bessofloor.com/cdn/shop/files/11078.webp?v=1761831852&width=800",
    "https://bessofloor.com/cdn/shop/files/Frame1_683c6166-8c21-4392-926d-83c4035b15bb.jpg?v=1743951377&width=1125",
    "https://bessofloor.com/cdn/shop/files/Frame1_2_754f2bef-6857-4ae9-b37a-11a44742de3b.jpg?v=1743949894&width=1125",
    "https://bessofloor.com/cdn/shop/files/11244.webp?v=1764687998&width=800",
    "https://bessofloor.com/cdn/shop/files/11245.webp?v=1764687998&width=800",
    "https://bessofloor.com/cdn/shop/files/11246.webp?v=1764687983&width=800",
    "https://bessofloor.com/cdn/shop/files/11247.webp?v=1764687983&width=800"
];

const dir = path.join(__dirname, 'assets/images/catalog/kitchen_faucets');

urls.forEach(url => {
    const filename = url.split('/').pop().split('?')[0];
    const filePath = path.join(dir, filename);
    const file = fs.createWriteStream(filePath);
    https.get(url, function(response) {
        response.pipe(file);
    });
});

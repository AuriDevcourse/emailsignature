function generateSignature(isMobile) {
    const fullName = document.getElementById('fullName').value;
    const position = document.getElementById('position').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const photo = document.getElementById('photo').value;
    const linkedin = document.getElementById('linkedin').value;
    const extraText = document.getElementById('extraText').value;

    // Handle long names
    let nameStyle = 'font-size: 18px;';
    let nameHtml = fullName;
    
    if (fullName.length > 20) {
        nameStyle = 'font-size: 16px;';
        // Split the name into words
        const words = fullName.split(' ');
        if (words.length > 1) {
            // Take the last word and put it on a new line
            const lastWord = words.pop();
            nameHtml = words.join(' ') + '<br><span style="margin-left: 5px;">' + lastWord + '</span>';
        }
    }

    // Handle long extra text
    let extraTextHtml = extraText;
    if (extraText && extraText.length > 40) {
        const words = extraText.split(' ');
        let currentLine = '';
        let lines = [];
        
        for (const word of words) {
            if ((currentLine + ' ' + word).length <= 40) {
                currentLine += (currentLine ? ' ' : '') + word;
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        }
        if (currentLine) lines.push(currentLine);
        
        extraTextHtml = lines.join('<br>');
    }

    const photoCell = isMobile ? `
        padding-bottom: 15px;
    ` : 'vertical-align: middle;';

    const signature = `
    <div style="padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        <table cellpadding="0" cellspacing="10" style="vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;">
            <tbody>
                <tr>
                    <td width="${isMobile ? 'auto' : '100px'}" style="${photoCell}">
                        ${photo ? `
                        <span style="padding: ${isMobile ? '5px' : '15px'}; display: block;">
                            <img src="${photo}" style="max-width: 80px;">
                            ${linkedin ? `
                            <div style="margin-top: -5px; text-align: center;">
                                <a href="${linkedin}" style="font-size: 9px; color: ${isMobile ? '#fff' : '#191919'}; text-decoration: underline; display: inline-block; width: 100%; text-align: center;" target="_blank">Let's connect!</a>
                            </div>
                            ` : ''}
                        </span>
                        ` : ''}
                    </td>
                    ${!isMobile ? `<td style="border-left: 2px solid; color: #ed634c;"></td>` : ''}
                    <td style="vertical-align: middle;">
                        <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle;">
                            <tbody>
                                <tr>
                                    <td style="line-height: 1.1;">
                                        <span style="${nameStyle} margin-left:5px; font-weight: 900; color: ${isMobile ? '#fff' : '#191919'}; font-family: Verdana;">${nameHtml}</span><br>
                                        <span style="font-size: 13px; margin-left:5px; font-weight: 700; font-style: italic; color: ${isMobile ? '#fff' : '#191919'}; font-family: Verdana;">${position}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 3px;">
                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Phone25.png" width="16" style="display: inline-block; margin-left: 5px; vertical-align: middle;">
                                        <a href="tel:${phone}" style="text-decoration: underline; color: ${isMobile ? '#fff' : '#191919'}; font-size: 10px; margin-left: 5px; font-family: Verdana;">${phone}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 3px;">
                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Mail25.png" width="16" style="display: inline-block; margin-left: 5px; vertical-align: middle;">
                                        <a href="mailto:${email}" style="text-decoration: underline; color: ${isMobile ? '#fff' : '#191919'}; font-size: 10px; margin-left: 5px; font-family: Verdana;">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 3px;">
                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Website25.png" width="16" style="display: inline-block; margin-left: 5px; vertical-align: middle;">
                                        <a href="${website}" target="_blank" style="text-decoration: underline; color: ${isMobile ? '#fff' : '#191919'}; font-size: 10px; margin-left: 5px; font-family: Verdana;">${website}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 3px;">
                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Location25.png" width="16" style="display: inline-block; margin-left: 5px; vertical-align: middle;">
                                        <span style="color: ${isMobile ? '#fff' : '#191919'}; font-size: 10px; margin-left: 5px; font-family: Verdana; text-decoration: underline;">Matrikel1, Copenhagen</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 10px;">
                                        <table cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding-right: 3px;">
                                                    <a href="https://www.facebook.com/TechBBQ/" target="_blank" style="display: inline-block;">
                                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Facebook25.png" alt="facebook" height="20">
                                                    </a>
                                                </td>
                                                <td style="padding-right: 3px;">
                                                    <a href="https://www.linkedin.com/company/techbbq/" target="_blank" style="display: inline-block;">
                                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Linkedin25.png" alt="linkedin" height="20">
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.instagram.com/techbbqdk/" target="_blank" style="display: inline-block;">
                                                        <img src="https://techbbq.dk/wp-content/uploads/2025/10/Instagram25.png" alt="instagram" height="20">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                ${extraText ? `
                                <tr>
                                    <td style="padding-top: 5px;">
                                        <span style="color: ${isMobile ? '#fff' : '#191919'}; font-size: 9px; font-style: italic; margin-left: 5px; line-height: 1; display: block;">${extraTextHtml}</span>
                                    </td>
                                </tr>
                                ` : ''}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    return signature;
}

document.getElementById('signatureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Generate both desktop and mobile signatures
    const desktopSignature = generateSignature(false);
    const mobileSignature = generateSignature(true);

    // Update previews
    document.getElementById('desktopPreview').innerHTML = desktopSignature;
    document.getElementById('mobilePreview').innerHTML = mobileSignature;
    
    // Show copy button
    document.getElementById('copySignature').style.display = 'inline-block';
});

// Copy signature
document.getElementById('copySignature').addEventListener('click', function() {
    const signatureElement = document.getElementById('desktopPreview');
    copySignature(signatureElement);
});

function copySignature(element) {
    const range = document.createRange();
    range.selectNode(element);
    
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        alert('Signature copied! You can now paste it into your email.');
    } catch (err) {
        console.error('Failed to copy signature: ', err);
        alert('Failed to copy signature. Please try again.');
    }
    
    selection.removeAllRanges();
}

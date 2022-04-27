function rot(str,k){
    return str.replace(/./g, (s) => {
        var s_code = s.charCodeAt(0);

        // special symbol part 1
        if (s_code >= 32 && s_code <= 47){
            s_code += k;
            while (s_code < 32){    
                s_code = 32 - s_code + 32;
            }
            while (s_code > 47){
                s_code -= 16;
            }
            return String.fromCharCode(s_code);
        };

        // number
        if (s_code >= 48 && s_code <= 57){
            s_code += k;
            while (s_code < 48){
                s_code = 48 - s_code + 48;
            }
            while (s_code > 57){
                s_code -= 10;
            }
            return String.fromCharCode(s_code);
        };

        // special symbol part 2
        if (s_code >= 58 && s_code <= 64){
            s_code += k;
            while (s_code < 58){
                s_code = 58 - s_code + 58;
            }
            while (s_code > 64){
                s_code -= 7;
            }
            return String.fromCharCode(s_code);
        };

        // uppercase letter
        if (s_code >= 65 && s_code <= 90){
            s_code += k;
            while (s_code < 65){
                s_code = 65 - s_code + 65;
            }
            while (s_code > 90){
                s_code -= 26;
            }
            return String.fromCharCode(s_code);
        };

        // special symbol part 3
        if (s_code >= 91 && s_code <= 96){
            s_code += k;
            while (s_code < 91){
                s_code = 91 - s_code + 91;
            }
            while (s_code > 96){
                s_code -= 6;
            }
            return String.fromCharCode(s_code);
        };

        // lowercase letter
        if (s_code >= 97 && s_code <= 122){
            s_code += k;
            while (s_code < 97){
                s_code = 97 - s_code + 97;
            }
            while (s_code > 122){
                s_code -= 26;
            }
            return String.fromCharCode(s_code);
        };

        // special symbol part 4
        if (s_code >= 123 && s_code <= 126){
            s_code += k;
            while (s_code < 123){
                s_code = 123 - s_code + 123;
            }
            while (s_code > 126){
                s_code -= 4;            
            }
            return String.fromCharCode(s_code);
        };
        
        
    });

    
}
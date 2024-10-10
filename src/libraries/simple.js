buttonParamsJson: JSON.stringify({
                display_text: btn[0],
                id: btn[1]
              }),
            }));
            /*dynamicButtons.push(
              (copy && (typeof copy === 'string' || typeof copy === 'number')) && {
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({
                  display_text: 'Copy',
                  copy_code: copy
                })
              });*/
     copy = Array.isArray(copy) ? copy : [copy]
     copy.map(copy => {
                dynamicButtons.push({
                    name: 'cta_copy',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Copy',
                        copy_code: copy[0]
                    })
                });
            });
            urls?.forEach(url => {
              dynamicButtons.push({
                name: 'cta_url

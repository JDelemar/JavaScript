
$(document).ready(function() {
    var arySites =[
        'https://github.com',
        'https://google.com'
    ];
    
    if (displayWebViews(arySites))
        addPanelFunctions();
    
});

/**
 * Display webview for site(s), returns true if no errors, false if error encountered
 * @param {string[]} arySites - String of sites to display in webviews
 * @returns {boolean} Completed with no errors
 */
function displayWebViews(arySites) {
    if(typeof arySites === 'undefined' || Object.prototype.toString.call(arySites) !== '[object Array]') return false;

    /** Generate panel string */
    var generatePanel = function generatePanel() {
        var num = $('webview').length + 1;
        var templatePanel = `
            <div class="toolbox-tools panel panel-primary draggable-panel toolbar-panel ui-draggable ui-resizable" id="toolbox-tools${num === 1?"": num}">
                <div class ="panel-heading lang-panel-header-tools">
                    <span></span>
                    <i class ="fa fa-times pull-right close-panel" id="close-toolbox-tools${num === 1 ? "" : num}"></i>
                    <i class ="toggle-toolbox-tools fa pull-right fa-chevron-down" id="toggle-toolbox-tools${num === 1 ? "" : num}"></i>
                </div>
                <webview id="webview${num}" style="width:100%; height:100%" preload="./insert.js" class ="resizable" class ="panel panel-primary draggable-panel toolbar-panel ui-draggable ui-resizable"></webview>
            </div>
        `;
            //<webview id="webview${num}" style="width: 100%; height: 100%" src="${src}" preload="./insert.js" class="resizable" class="panel panel-primary draggable-panel toolbar-panel ui-draggable ui-resizable" ></webview>
        return templatePanel;
    };
    arySites.forEach(function(siteUrl, index) {
        var $panel = $(generatePanel());
        $('body').append($panel);
        var $webview = $panel.find('webview');
        $webview[0].src = siteUrl;
        $webview[0].addEventListener('dom-ready', () => {
            // type 2 code works
            // source: https://ourcodeworld.com/articles/read/201/how-to-send-retrieve-information-and-manipulate-the-dom-from-a-webview-with-electron-framework
            console.log('DOM-Ready, triggering event');
            $webview[0].send('request');
            // $webview[0].send('alert-webview', 'Alerting from the webview ' + siteUrl);
            // // type 1 code works
            // var script = `
            //     var result = _spPageContextInfo;
            //     alert('Got the info');
            //     Promise.resolve(result);
            // `;
            // $webview[0].getWebContents().executeJavaScript(script)
            //     .then((result) => { console.log(result); webviewResult = result; })
            //     .catch((error) => console.log(error));
            // // $webview[0].executeJavaScript('alert("_spPageContextInfo" + JSON.stringify(_spPageContextInfo))');
        });
        // also with type 2...and the insert.js too
        // process the data from the webview
        $webview[0].addEventListener('ipc-message', function(event) {
            console.log('event:', event);
            console.info('event.channel:', event.channel);
            // $(this).closest('.panel').text(event.channel);
            // $(this).closest('.panel').find('span').text(event.channel);
            $(this).closest('.panel').find('span').text(event.args[0].title);
        });
    });

    return true;
}

/**
 * Add/activate panel functions
 * source: {@link http://where/did/I/get/this/from/again?}
 */
function addPanelFunctions() {
    // Add drag and resize option to panel
    $(".toolbox-tools").draggable({
        start: function(event, ui) {
            $('.toolbox-tools').css('z-index','');
            $(event.currentTarget).css('z-index',90);
        },
        handle: ".panel-heading",
        stop: function(evt, el) {
            // Save size and position in cookie
            /*
            $.cookie($(evt.target).attr("id"), JSON.stringify({
                "el": $(evt.target).attr("id"),
                "left": el.position.left,
                "top": el.position.top,
                "width": $(evt.target).width(),
                "height": $(evt.target).height()
            }));
            */
        }
    }).resizable({
        handles: "e, w, s, se",
        stop: function(evt, el) {
            // Save size and position in cookie
            /*
            $.cookie($(evt.target).attr("id"), JSON.stringify({
                "el": $(evt.target).attr("id"),
                "left": el.position.left,
                "top": el.position.top,
                "width": el.size.width,
                "height": el.size.height
            }));
            */
        }
    });
    // Expand and collaps the toolbar
    $(".toggle-toolbox-tools").on("click", function() {
        //var panel = $("#toolbox-tools");
        var panel = this.closest('.toolbox-tools');
        if($(panel).data("org-height") == undefined) {
            $(panel).data("org-height", $(panel).css("height"));
            $(panel).css("height", "41px");
        }
        else {
            $(panel).css("height", $(panel).data("org-height"));
            $(panel).removeData("org-height");
        }
        $(this).toggleClass('fa-chevron-down').toggleClass('fa-chevron-right');
    });
    // Make toolbar groups sortable
    $("#sortable").sortable({
        stop: function(event, ui) {
            var ids =[];
            $.each($(".draggable-group"), function(idx, grp) {
                ids.push($(grp).attr("id"));
            });
            // Save order of groups in cookie
            //$.cookie("group_order", ids.join());
        }
    });
    $("#sortable").disableSelection();
    // Make Tools panel group minimizable
    $.each($(".draggable-group"), function(idx, grp) {
        var tb = $(grp).find(".toggle-button-group");
        $(tb).on("click", function() {
            $(grp).toggleClass("minimized");
            $(this).toggleClass("fa-caret-down").toggleClass("fa-caret-up");
            // Save draggable groups to cookie (frue = Minimized, false = Not Minimized)
            var ids =[];
            $.each($(".draggable-group"), function(iidx, igrp) {
                var itb = $(igrp).find(".toggle-button-group");
                var min = $(igrp).hasClass("minimized");
                ids.push($(igrp).attr("id") + "=" + min);
            });
            $.cookie("group_order", ids.join());
        });
    });
    // Close the panel
    $(".close-panel").on("click", function() {
        $(this).parent().parent().hide();
    });
    // Add Tooltips
    $('button').tooltip();
    $('.toggle-button-group').tooltip();
}


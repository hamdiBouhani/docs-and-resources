/* GA Event Tracking */
(function($){
    $.fn.EventTracker = function(){

        var settings = $.extend({
            domain: window.location.host,
            url: window.location.href,
            linkFollowed: false
        });

        // define category based on section
        var section = $(this);
        var category = section[0].tagName.toLowerCase();
        if(category === 'div') {
            category = section.attr('id');
        } else if(category === 'main') {
            category = 'main-content';
        }

        // fire events only for all non-anchor links in this section, using a delegated event handler in case links are created dynamically
        section.on('click', 'a', function(e) {
            var link = $(this);
            if(link.is('[data-toggle="modal"]')) return;
            if(link.is('[href^="#"]')) return;

            // Ignore this event if preventDefault has been called.
            if (e.defaultPrevented) return;

            var href = link.attr("href");

            if(href != undefined && !link.hasClass('prevent-click')) {
                e.preventDefault();

                settings.linkFollowed = false;
                var label = href.match('^/') ? 'https://' + settings.domain.replace(/\/$/, '') + href : href; // if href is relative, make it absolute

                //remove the query string from both the current page URL (action) and the clicked URL (label)
                settings.url = settings.url.split("?")[0].split("#")[0];
                //label = label.split("?")[0].split("#")[0];
                // add transport to outbound links & assets to postpone opening link until the event has finished sending
                link.external = false;
                if((href.match('^http') && label.indexOf(location.hostname) === -1) || (/(\.(pdf|doc|docx|odt|ppt|ods|xls|zip|odp|sxd|odg|rtf|txt|mp4|ogg|wmv|mp3|mov|exe|msi|gz|flv)$)/i.test(href.toLowerCase()) === true)) {
                    link.external = true;
                }
                if(e.metaKey || e.ctrlKey) {
                    link.external = true;
                }

                try {
                    // Youtube video popup
                    linkCallback(link);
                } catch(exception) {
                    console.log(exception);
                }
            }
        });

        return this;

        // Gets called after the event is finished sending
        function linkCallback(link) {
            if (!settings.linkFollowed) {
                settings.linkFollowed = true;

                var country_code = '';
                if (typeof demandbase_data_promise == 'object') {
                    var demandbase_data_ip = demandbase_data_promise.responseJSON;
                    if(demandbase_data_ip && typeof demandbase_data_ip.country == 'string' && demandbase_data_ip.country != '') {
                        country_code = demandbase_data_ip.country;
                    }
                    if (demandbase_data_ip && typeof demandbase_data_ip.registry_country_code == 'string' && demandbase_data_ip.registry_country_code != '') {
                        country_code = demandbase_data_ip.registry_country_code;
                    }
                }

                //open external links in a new window
                if(link.external) {
                    var cdn_lookup = {
                        'iwz8whq0nb0': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/apx-cloud-builder.mp4',
                        'ZrWIn5qAQLM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/canadian-bank-note.mp4',
                        'RIsrsOz5ynA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/casio-japan-success-story.mp4',
                        '1Rf18XdDjXY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/dfs-germany-success-story.mp4',
                        'jbx2ypqQalc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/ibm-power-linux-and-suse.mp4',
                        '1UgAk98MPho': 'https://cdn.microfocus.com/cached/video/2014/suse/forrester-open-stack-videos/national-vision.mp4',
                        'QSt3DNHxcak': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/rackspace-customer-success-story.mp4',
                        '16NUjDpD56A': 'https://cdn.microfocus.com/cached/video/2013/suse/take-control-of-your-companys-cloud-strategy-with-dell-suse-three-of-four.mp4',
                        'ZCbb0Kt2IOw': 'https://cdn.microfocus.com/cached/video/2014/suse/forrester-open-stack-videos/supermuc.mp4',
                        'OoXIjYJqQug': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/tokyo-institute-of-technology.mp4',
                        '8pwYrWMPbRQ': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/autodata-norge-as.mp4',
                        'ZrWIn5qAQLM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/canadian-bank-note.mp4',
                        'HZyG9Z8DTtw': 'https://cdn.microfocus.com/cached/video/2015/suse/ChalkTalks/suse-enterprise-storage-chalktalk.mp4',
                        'Tz3-Ir2Zzo0': 'https://cdn.microfocus.com/cached/video/2015/suse/ChalkTalks/suse-enterprise-storage-chalktalk.mp4',
                        'wPLXxoPrBaY': 'https://cdn.microfocus.com/cached/docrep/public/suse_rollback_chalktalk.mp4',
                        'RkvKLddii14': 'https://cdn.microfocus.com/cached/docrep/public/suse_rollback_chalktalk.mp4',
                        'NScLx-D-l7c': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/protosoft-specializes-suse-products.mp4',
                        'D727nJQMpIY': 'https://cdn.microfocus.com/cached/video/2015/suse/sap/sles-suse-sap.mp4',
                        'T7cckftCBb4': 'https://cdn.microfocus.com/cached/video/2009/appliance/tech_data.flv',
                        'HnQADKmK7dY': 'https://cdn.microfocus.com/cached/video/2009/appliance/zmanda.flv',
                        'mHDo7bJnIf4': 'https://cdn.microfocus.com/cached/video/2014/suse/15-years-of-linux-innovation-for-ibm-system-z.mp4',
                        'PCwcWm9Yb4A': 'https://cdn.microfocus.com/cached/video/2014/suse/advantages-ibm-power.mp4',
                        'ZDdinObt0ag': 'https://cdn.microfocus.com/cached/video/2010/emerging_tech/appliance/slms_edited.mp4',
                        'PWhBWC4y42A': 'https://cdn.microfocus.com/cached/video/2010/datacenter/enterprise_linux_servers/solaris_to_sles_app_porting.mp4',
                        'k58SIstQ5C4': 'https://cdn.microfocus.com/cached/video/2013/suse/take-control-of-your-companys-cloud-strategy-with-dell-suse-four-of-four.mp4',
                        'hG6pyMjlnOU': 'https://cdn.microfocus.com/cached/video/success/2011/basisone.f4v',
                        'oCgkSMDgOp8': 'https://cdn.microfocus.com/cached/video/2009/datacenter/solaris_to_sles_skip_kerry_2.mp4',
                        '6vimHpQh9XQ': 'https://cdn.microfocus.com/cached/video/2009/datacenter/solaris_to_sles.flv',
                        'xqGl4qsFC10': 'https://cdn.microfocus.com/cached/docrep/public/suse_cache_tiering_on_suse_enterprise_storage_chalktalk.mp4',
                        'ajR6YV3twNg': 'https://cdn.microfocus.com/cached/docrep/public/cloud_fundamentals_chalktalk.mp4',
                        'SJb2LeMUHOk': 'https://cdn.microfocus.com/cached/video/2010/partner/dc/DC015_System_z_Overview-720.mp4',
                        'mxQzgo0y3I8': 'https://cdn.microfocus.com/cached/video/2013/partner/SUSE/20130404_SUSE-Cloud-ChalkTalk_360p.mp4',
                        'JP0pwQ2PqbI': 'https://cdn.microfocus.com/cached/video/2014/suse/ChalkTalks/SUSE_ZeroDownTime_720p.mp4',
                        'HuszSIxoRxo': 'https://cdn.microfocus.com/cached/video/2014/suse/forrester-open-stack-videos/cir-food-subtitled-720p.mp4',
                        'Y2N3wi3iBM0': 'https://cdn.microfocus.com/cached/video/2013/suse/suse-linux-enterprise-server-for-system-z.mp4',
                        'FtA1_Ia2P2c': 'https://cdn.microfocus.com/cached/video/2009/appliance/adaris.flv',
                        'PWQbrMmtztQ': 'https://cdn.microfocus.com/cached/video/2009/appliance/bitrock.flv',
                        '155LVrDfraI': 'https://cdn.microfocus.com/cached/video/2009/appliance/codice_software.flv',
                        '56MtsMCUBzM': 'https://cdn.microfocus.com/cached/video/2009/appliance/four_js.flv',
                        'yuVh5gQA_oc': 'https://cdn.microfocus.com/cached/video/2009/appliance/quest_software.flv',
                        'i05e8726utc': 'https://cdn.microfocus.com/cached/video/2009/appliance/sonoa.flv',
                        'lqCN2hu_ZcU': 'https://cdn.microfocus.com/cached/video/2009/appliance/vmware.flv',
                        'a-WZJbbZW9Q': 'https://cdn.microfocus.com/cached/video/bs_06/Deutsche_Bahn.flv',
                        '-KyGv6AZN9M': 'https://cdn.microfocus.com/cached/docrep/public/suse_erasure_coding_on_suse_enterprise_storage_chalktalk.mp4',
                        '4GnjXaZLRmY': 'https://cdn.microfocus.com/cached/video/2010/webex/fault_tolerant_linux_solutions.flv',
                        'c1kD9grnNWk': 'https://cdn.microfocus.com/cached/video/2014/suse/forrester-open-stack-videos/forrester-analyst-suse-video-standardization-and-beyond.mp4',
                        'gMZ1ztY_GrM': 'https://cdn.microfocus.com/cached/video/2014/suse/promo/cio-forrester-zdt-webinar.mp4',
                        '6ZbWPdIaVU4': 'https://cdn.microfocus.com/cached/video/2011/corporate/brainshare/bs2011_keynote_friday_suse_part1_640.mp4',
                        '9H7e6BcI5Fo': 'https://cdn.microfocus.com/cached/video/2011/corporate/brainshare/bs2011_keynote_friday_suse_part2_640.mp4',
                        'QCGmyElwYdI': 'https://cdn.microfocus.com/cached/video/2010/datacenter/enterprise_linux_servers/sles_sap_hugo_boss.flv',
                        'hINdPRPyKKQ': 'https://cdn.microfocus.com/cached/video/2009/linux/linux_adoption_part_1.flv',
                        '-l2TXawUqik': 'https://cdn.microfocus.com/cached/video/2009/linux/linux_adoption_part_2.flv',
                        'uVjJON4sv14': 'https://cdn.microfocus.com/cached/video/2011/webex/linux-deployment-best-practices.flv',
                        'xGFtfrXhKh0': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Business_04.flv',
                        'pBgkbbLW5pU': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Business_01.flv',
                        '83fjRYm8DDg': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Technical_03.flv',
                        '3FaT_YKrUaw': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Technical_02.flv',
                        'HA9Pxo6YITQ': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Business_02.flv',
                        'F0FrJEQv3KI': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Business_05.flv',
                        'wv3VnMsY2_o': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Technical_05.flv',
                        'J8LPEZWt8kE': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Technical_01.flv',
                        'ANmT58fey7M': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Technical_04.flv',
                        'NlLqHsM3bOk': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Mark_Business_03.flv',
                        '427o7V21sYA': 'https://cdn.microfocus.com/cached/video/2011/dc/suse_manager_infoweek.mp4',
                        'b8A981g6jQk': 'https://cdn.microfocus.com/cached/video/2013/suse/de-de/manager-campaign-de-video_1.mp4',
                        'DuzRwmQVjyQ': 'https://cdn.microfocus.com/cached/video/2013/suse/systemz/systemz_baldor.mp4',
                        'z3chnTZQQMc': 'https://cdn.microfocus.com/cached/video/2010/datacenter/enterprise_linux_servers/system_z_webcast_miami_dade.flv',
                        'Gq5hVhmv3V4': 'https://cdn.microfocus.com/cached/video/2013/suse/mission-critical-computing.mp4',
                        'NO1w7KVDKqA': 'https://cdn.microfocus.com/cached/video/2013/netiq/aqua-citrine-demo.mp4',
                        'Ly2aerlXcn4': 'https://cdn.microfocus.com/cached/docrep/public/20150217_SUSE_Software_Defined_Storage_ChalkTalk.mp4',
                        '0X_h5xLmT_c': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Business_01.flv',
                        'E4exyguuFP4': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Technical_03.flv',
                        'nXT3X8A4kLE': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Business_04.flv',
                        'DYGHprawGRY': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Technical_02.flv',
                        '_K_Wz3G7hd4': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Business_03.flv',
                        '0oflkKVmnqw': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Technical_01.flv',
                        'B6vbDQxp6Qo': 'https://cdn.microfocus.com/cached/video/linux/ylir/videos/Moiz_Business_02.flv',
                        '8CUvzrs0eFI': 'https://cdn.microfocus.com/cached/video/2012/suse/webex/reducing_sap_tco_unix_to_linux_768.mp4',
                        '-DY-TitnRRw': 'https://cdn.microfocus.com/cached/video/2013/suse/system_z_overview_640_360.mp4',
                        'XtzwyO8sTQ4': 'https://cdn.microfocus.com/cached/video/2014/suse/slash-your-costs-consolidate-your-database-environment-to-ibm-system-z-and-suse-linux-enterprise-server.mp4',
                        'H0hMD0FW4AE': 'https://cdn.microfocus.com/cached/video/2014/suse/database-consolidation-to-linux-on-ibm.mp4',
                        'yAVKl1stezA': 'https://cdn.microfocus.com/cached/video/2015/suse/sap/sles-suse-sap.mp4',
                        'HA-tZM4tA_I': 'https://cdn.microfocus.com/cached/video/2010/emerging_tech/appliance/webyast_suse.mp4',
                        'HfZnRkf4quc': 'https://cdn.microfocus.com/cached/video/2015/suse/ChalkTalks/20150220-Software_Fundamentals_ChalkTalk_360p.mp4',
                        'UAq0Hp3l0lI': 'https://cdn.microfocus.com/cached/video/2014/suse/forrester-open-stack-videos/suse-and-microsoft.mp4',
                        'HUm0TXLQS4A': 'https://cdn.microfocus.com/cached/video/2013/suse/cloud/wso2-webinar.mp4',
                        'gKOlpLnglQM': 'https://cdn.microfocus.com/cached/video/2014/suse/Demos/20140916-Demo-HighAvailability-mobile.mp4',
                        '6pykg5uTJ24': 'https://cdn.microfocus.com/cached/video/2010/emerging_tech/appliance/suse_studio/suse_gallery_final.flv',
                        'JPIvLXoGCXI': 'https://cdn.microfocus.com/cached/video/2010/emerging_tech/appliance/slms_suse.mp4',
                        'TdVLNIpsyaU': 'https://cdn.microfocus.com/cached/video/2011/dc/enterprise-linux-servers/10_NOV_261_Here_Now_SLE_FINAL.flv',
                        'vY5Q9T9kgfw': 'https://cdn.microfocus.com/cached/docrep/public/sle_live_patching_chalktalk_720p.mp4',
                        'gn3igq9t30k': 'https://cdn.microfocus.com/cached/video/2011/partner/dc/SLEPOS-mobile-BS2011-ITC.mp4',
                        '-Ouvb3kQbSw': 'https://cdn.microfocus.com/cached/video/2010/datacenter/enterprise_linux_servers/sles_intel.flv',
                        't3kyArWviLo': 'https://cdn.microfocus.com/cached/video/2011/dc/microfocus_sap_2.mp4',
                        'y8rIY-ht1ds': 'https://cdn.microfocus.com/cached/video/2009/datacenter/e2e/sles_ha.flv',
                        '5n4lOsOj00E': 'https://cdn.microfocus.com/cached/video/2009/datacenter/e2e/sles_live_migration.flv',
                        'Q6r4IowBeeM': 'https://cdn.microfocus.com/cached/video/2011/partner/dc/suse-manager-demo-bs2011-itc.mp4',
                        'SPwMRhBZsiQ': 'https://cdn.microfocus.com/cached/docrep/public/suse_manager_chalktalk.mp4',
                        'Pp5msrcnLf4': 'https://cdn.microfocus.com/cached/video/2014/suse/forrester-open-stack-videos/suse-manager-management-pack-for-system-center-operations-manager.mp4',
                        'EdSq1qlH2Yg': 'https://cdn.microfocus.com/cached/video/2014/suse/ChalkTalks/SUSE_CorporateStory_ChalkTalk_720p.mp4',
                        '_6vMdCgpwWE': 'https://cdn.microfocus.com/cached/video/2011/emerging_tech/appliance/suse_studio/suse_studio_1_2_final.mp4',
                        'JMCcZIqCw7Y': 'https://cdn.microfocus.com/cached/video/2011/emerging_tech/appliance/suse_studio/suse_studio_amazon_ec2.mp4',
                        'ZKV58iazITM': 'https://cdn.microfocus.com/cached/video/2011/partner/dc/suse-studio-demo-bs2011-itc.mp4',
                        'clIFJlCFPhs': 'https://cdn.microfocus.com/cached/docrep/public/suse_studio_chalktalk_hd.mp4',
                        '892laN0V3kY': 'https://cdn.microfocus.com/cached/video/2010/emerging_tech/appliance/suse_studio/suse_studio_1_1_suse.mp4',
                        'Uw5DybnNGG4': 'https://cdn.microfocus.com/cached/video/2010/emerging_tech/appliance/screencast-intro-new.mp4',
                        'ouAz1F1CNJc': 'https://cdn.microfocus.com/cached/video/2009/webex/smt_sles11.flv',
                        '-t9BRB3C_7k': 'https://cdn.microfocus.com/cached/video/2013/suse/take-control-of-take-control-of-your-companys-cloud-strategy-with-dell-suse-two-of-four_1.mp4',
                        'uXwUfIebqYA': 'https://cdn.microfocus.com/cached/video/2013/suse/take-control-of-your-company-cloud-strategy-with-dell-suse.mp4',
                        'DmijAii_sVE': 'https://cdn.microfocus.com/cached/video/2011/dc/enterprise-linux-servers/suse-10-ways-solaris-mark-gibbs.mp4',
                        'YjoVha-JktQ': 'https://cdn.microfocus.com/cached/video/2010/partner/linux/ibm_jay_ennesser_review.flv',
                        'gZK2z_FgKmk': 'https://cdn.microfocus.com/cached/video/2013/suse/suse-and-ibm-partnership.mp4',
                        'ziOjPgM8sCk': 'https://cdn.microfocus.com/cached/video/2011/webex/upgrading_to_sles_best_practices_final.mp4',
                        'FjyONuC_Xzo': 'https://cdn.microfocus.com/cached/video/2010/webex/suse_studio_vmware.mp4 / http://cdn.microfocus.com/cached/video/2010/webex/suse_studio_vmware.mp4',
                        'eWzbJbxXMcg': 'https://cdn.microfocus.com/cached/video/2011/dc/cloudmanager/virtual-workloads-to-build-the-bridge-to-the-cloud.f4v',
                        'GwrnxlvF0l0': 'https://cdn.microfocus.com/cached/video/2015/suse/promo/virtualized-mission-critical-applications/virtualized-mission-critical-applications.mp4',
                        'OcFX4j0MG6A': 'https://cdn.microfocus.com/cached/video/2013/suse/what-does-the-chameleon-say-final-c.mp4',
                        '9V7R3y9Og_o': 'https://cdn.microfocus.com/cached/video/success/zabka_poland_with_english_subtitles.flv',
                        'P0TCcLWIm2s': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/apollo-optik.mp4',
                        'gIiizo0kqzk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/archiva-and-suse.mp4',
                        'wmaJkQ6hYpY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/basis-one-south-africa.mp4',
                        'JflpFxffW14': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/bright-computing-success-video.mp4',
                        'C0YswwnqPfo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/broadview-networks-and-suse-a-geo-clustering-solution.mp4',
                        'QgIJ6z9f-tQ': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/broadview-networks-and-suse.mp4',
                        'sETKT-OXwD4': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/business-connexion-and-suse-a-customer-success-story.mp4',
                        'uroryFU78gM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/chalktalk-cloud-funamentals.mp4',
                        'BDlXZORCCdE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/chalktalk-docker-in-suse-linux-enterprise-server.mp4',
                        'wcYnjUMm8oM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/chameleon-dance-opening-video-for-susecon-2013.mp4',
                        'kuZMqLw5C50': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/consol-glass-south-africa-and-suse-a-customer-success-story.mp4',
                        'pV1MYl6w7wA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/efis-edi-finance-service-ag-and-suse.mp4',
                        'aFdlUIdYwQU': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/fis.mp4',
                        '0DwGywFRZEA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/fritz-egger-customer-success-video.mp4',
                        'vREspQG6ayQ': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/german-air-traffic-control-customer-success-video.mp4',
                        '6sD_aEPRKHI': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/halkbank-turkey-success-story.mp4',
                        'WFw9AlAeubw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-tuesday-keynote-opening-video.mp4',
                        'LPBvlw7pR80': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/ibm-and-suse-relationship-jean-staten-healy.mp4',
                        'tI5jk-1OI-g': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/ibm-system-z-personal-development-tool-zpdt-live-demo.mp4',
                        'a1p3CmH9QZM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/imperial-logistics-south-africa-and-suse.mp4',
                        'tC_oZnbbNdM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/infonet-nederlands-success-story.mp4',
                        'dRMY01dhulA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/keep-thousands-of-servers-compliant-with-suse-manager.mp4',
                        'qsghsZ8qch8': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/kongsberg-spacetec-success-video.mp4',
                        'tQD6DIradF0': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/microsoft-and-suse-microsoft-system-center-and-suse-manager-integration.mp4',
                        'W_0WbdDrng8': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/municipality-of-the-hague-customer-success-video.mp4',
                        'Xit3lRnSsxk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/national-library-of-south-africa.mp4',
                        '5y20t5qZcXo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/office-depot-customer-success-video.mp4',
                        'lKqgrNAJYAE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/openstack-summit-portland-2013-dell-and-suse-discussion.mp4',
                        'N86UqV40tU4': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/oxya-and-suse.mp4',
                        '9OS99n9252w': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/peev-consulting-services.mp4',
                        'mX1ANZ3xzco': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/pick-n-pay-and-suse-linux-enterprise-point-of-service.mp4',
                        'tJ85oYOluRk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/pneuhage-tire-and-suse.mp4',
                        'FUO9GYJS71A': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/sap-se.mp4',
                        '92ricJ2hZ7E': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/stia-admonter-austria-and-suse-linux-enterprise-server.mp4',
                        'k4gxJLkI1ck': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/storage-fundamentals-for-suse-chalktalk.mp4',
                        'smmYoUuzHsQ': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-alliance-partners-suse-cisco.mp4',
                        'rDthwjdhkA8': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-corporate-overview.mp4',
                        '4gjJMii1IIQ': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-engineering-montage.mp4',
                        'cLB7VkKGyDg': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-live-demo.mp4',
                        'OzbP-cV7Y2U': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-monitor.mp4',
                        '1crbGSJHnss': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-patch.mp4',
                        '3Y-D4jnWGvk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-search.mp4',
                        'GJgWvTLo07k': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-snapper-live-demo.mp4',
                        '_ZBXv1Cgfec': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-studio-windows-azure-integration.mp4',
                        'jAX5ywKcsNM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2012-day-1-michael-miller-keynote.mp4',
                        'GFa1PSJ9Qis': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-chris-hallenbeck-sap-keynote.mp4',
                        'f_U5zAtit2k': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-friday-keynote-with-lew-tucker-of-cisco.mp4',
                        'IbRfBENUgTE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-friday-keynote-with-michael-miller.mp4',
                        'SlZ5L1KSDfg': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-friday-opening-keynote-video.mp4',
                        'pVNN6Wdvwgs': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-jim-wasko-ibm-keynote.mp4',
                        '4LKi3OVCbTE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-michael-miller-keynote.mp4',
                        'T0W4izFu_WM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-nils-brauckmann-keynote-speech.mp4',
                        'rkLwNfsIylg': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2013-tuesday-night-pirate-party-with-rusty-cutlass.mp4',
                        'MY92SOaiblk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-ibm-keynote-linux-on-mainframe.mp4',
                        'mF7-QSdciMw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/teradata-and-suse-linux-enterprise.mp4',
                        'FHoa3tTIBbY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/the-irish-centre-for-high-end-computing-ichec-and-suse.mp4',
                        'YznnEJs5ENc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/unisys.mp4',
                        'ZaLo_-q8f50': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/usharesoft.mp4',
                        'CyWr_fJMLpc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/using-suse-cloud-to-deploy-sap.mp4',
                        'HRES6VgZATo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/webyast-and-autoyast-live-demo.mp4',
                        'Rg6ksPA7SAc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/whats-the-chameleon-say-lip-sync-with-attendees.mp4',
                        '7HfQJ10N_-U': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/wolters-kluwer-italia.mp4',
                        'ZdidjWZBpno': 'https://cdn.microfocus.com/cached/video/2013/partner/SUSE/20130404-CT-Cloud-Fundamentals_360p.mp4',
                        'GczJ8QYvg84': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/enterprise-adoption-of-openstack.mp4',
                        't84qTX_l7pw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/enterprise-considerations.mp4',
                        'BUPAKfqDB1E': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/importance-of-maintaining-openstack-release-schedules.mp4',
                        '1LLdrm9TpxY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/introduction-to-panel-and-what-is-openstack.mp4',
                        'qjnlZK79-Gk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/openstack-project-technical-and-community-evolution.mp4',
                        'EOGEA7l4gWY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/operating-system-security-hardening-for-sap-hana.mp4',
                        'X5b2w3lbwMw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/role-of-vendors-in-openstack-ecosystem.mp4',
                        'KR2V1Ve27nc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/sap-hana-system-replication-failover-demo.mp4',
                        'MjnoND3XRKU': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-linux-enterprise-12-in-90-seconds.mp4',
                        '8_a2vPJEu9A': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-linux-enterprise-server-sap-hana-operating-system-patching.mp4',
                        'Brg6CMDZ-ro': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-automated-patch-management.mp4',
                        'qkqQDTN-y2I': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/the-future-of-openstack-and-conclusion.mp4',
                        'oEtM6V8aMeo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/open-source-is-in-our-genes.mp4',
                        'OWckZfWl6Nw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/we-are-enterprise-linux-and-more.mp4',
                        '4is291b6uzE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/you-matter.mp4',
                        '4jB-sUEY_Mo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/we-invest-in-being-innovative.mp4',
                        '52n5JFoq3Bo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/francis-antonissen-hana-cloud-platform-sap.mp4',
                        '52ScGZr0CGk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/chalktalk-suse-openstack-cloud.mp4',
                        '5tPn0tyt2WY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/travis-kuter-hewlett-packard-enterprise-and-suse-susecon-2015.mp4',
                        '8DaYPHLYYTs': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/michael-miller-and-hans-kroes-sap-for-hana-susecon-2015.mp4',
                        '8LAXg_UmzTY': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/microfocus-mac-spoof-2.mp4',
                        '8pOha28_69o': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-linus-enterprise-live-patching-demo.mp4',
                        'cHtA44jnwGk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/results-matter.mp4',
                        'cKn87Gl5SYM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/high-availability-storage.mp4',
                        'GwcQWclVdZk': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2015-closing-keynote-part-2.mp4',
                        'h61HHW-HFrc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/fujitsu-chiseki-sagawa-at-susecon-2015.mp4',
                        'hNybFIzaWdE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-3-salt-minions-in-action.mp4',
                        'iiErGOWCwWA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/fujitsu-form-2015-keynote.mp4',
                        'IJSr1HmcoNA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/demo-high-availability-extension.mp4',
                        'iOvGe0VyNiM': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-find-and-patch-to-shellshock.mp4',
                        'iuz1AOG0Fc0': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/sap-codetalk.mp4',
                        'jvyVSWORmoI': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/partner-interview-with-suse-at-sap-teched-d-code.mp4',
                        'KgC9XJAO-xw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-and-fujitsu.mp4',
                        'kQhceDvKXXE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-system-center-operations.mp4',
                        'lI-M7O_bRNg': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/ibm-watson-final-jeopardy.mp4',
                        'NkFQVcl62qo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/microfocus-mac-spoof-3.mp4',
                        'OXgFv13BkTo': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/giovanni-antonio-francesco-vorstenbosch-sap-hana.mp4',
                        'pDc9I3z7ab4': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/microfocus-mac-spoof-1.mp4',
                        'puu4Vd13PzE': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/patricia-massey-of-lenovo-at-susecon-2014.mp4',
                        'QFFKl3JwRBI': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/fujitsu-world-tour-2015.mp4',
                        'rF_jcsWNeKw': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/jurgen-kreuziger-susecon-2015.mp4',
                        'SYRlTISvjww': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/uptime-funk.mp4',
                        'xoOQGdXR708': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/leveraging-sap-hana-amazon-web.mp4',
                        'YNpqcVRCL54': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-manager-3-intro.mp4',
                        'yxF15R2VLgc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/ibm-linuxone-demo-susecon-2015.mp4',
                        'zdP_iog-e80': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/michael-miller-suse-expert-days-2016-invitation.mp4',
                        '9hAX8wOk4Dc': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-and-it-novum-collaborat-on-storage-management.mp4',
                        'gEhj1lZ7SKI': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/susecon-2015-keynote-michael-miller-chiseki-sagawa.mp4',
                        'hJZgjgYZOQg': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-and-fujitsu-2015.mp4',
                        'J6iv54gz9tA': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/the-power-of-three.mp4',
                        'q1s_jt8yyow': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/martin-epping-hpe-germany.mp4',
                        'tPiQKCXbIj8': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/cir-food-reggio-emilia-italy-english-subtitles.mp4',
                        'jepaWlwmang': 'https://cdn.microfocus.com/cached/video/2016/suse/refresh/suse-linux-enterprise-server-installation-walk-through.mp4'
                    };
                    // uncomment for testing in different countries
                    // country_code = 'CN';
                    var newUrl = link.attr("href").toLowerCase();
                    // Open YouTube videos in a modal popup
                    if (link.attr("target") !== "_blank" && (newUrl.indexOf("youtube.com") > 0 || newUrl.indexOf("y2u.be") > 0 || newUrl.indexOf("youtu.be") > 0)) {
                        var ytID = getYouTubeId(link.attr("href"));
                        newUrl = "//www.youtube.com/embed/" + ytID + "?autoplay=1&rel=0";
                        if (country_code == 'CN' && cdn_lookup[ytID]) {
                            newUrl = '/common/util/new_mediagallery_overlay.php?play=1&url=' + cdn_lookup[ytID] + '&title=&width=560&height=315&iframe=true';
                            jQuery('#videoPlayerFrame').attr('height','380');
                        }
                        // console.log(newUrl);
                        if(ytID !== "error"){
                            $("#videoModalOne").modal("show");
                            $("#videoPlayerFrame").attr("src", newUrl);
                        } else {
                            window.open(link.attr("href"));
                        }
                        return false;
                    } else if (newUrl.indexOf("v.qq.com") > 0) {
                        jQuery('#videoPlayerFrame').attr('height','370');
                        $("#videoModalOne").modal("show");
                        $("#videoPlayerFrame").attr("src", newUrl);
                        return false;
                    }
                    if(typeof ga != "undefined") {
                        ga("send", "pageview", link.attr("href"));
                    }
                    window.open(link.attr("href"));
                    return false;
                }

                // open everything else in same tab after timeout (work around for ad blockers)
                setTimeout(function(){ window.location.href = link.attr("href") }, 1000);
            }
        }

        //This function returns the YouTube ID from a YouTube URL
        function getYouTubeId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);

            if (match && match[2].length == 11) {
                return match[2];
            } else {
                return 'error';
            }
        }

    };

}( jQuery ));

$(document).ready(function() {
    /* Call the EventTracker plugin for each section where you want to track events on a page.
     Event tracking will be set up for every link that has an href in each section (except hash links).
     Section name = eventCategory, current url = eventAction, & target/href = eventLabel when the event is fired.  */
    $('header, #home-carousel, .top-banner, main, footer').each(function() {
        $(this).EventTracker();
    });
});

// testing double slash bug

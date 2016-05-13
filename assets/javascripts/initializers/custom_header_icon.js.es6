import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'discourse-customheadericon',
  initialize(container) {

     withPluginApi('0.1', api => {
      api.decorateWidget('header-icons:after', helper => {
        const siteSettings = container.lookup('site-settings:main');
        var customheadericon_enabled = siteSettings.customheadericon_enabled;
        if(!customheadericon_enabled) {
          return;
        }
        var icon_url = siteSettings.customheadericon_icon_image_url;
        var link_to_url = siteSettings.customheadericon_link_to_url;
        var title = siteSettings.customheadericon_link_title;
        return helper.rawHtml('<li class="header-dropdown-toggle"><a class="icon" href="' + link_to_url + '"><img height="32" width="32" alt="' + title + '" title="' + title + '" src="' + icon_url + '"></a></li>');
      });
     });
  }
}
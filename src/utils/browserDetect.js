import semver from 'semver';

export default {
	
	getBrowserUIMessage(versions, browser, app) {
		if (Object.keys.length === 0) {
			return false;
		}
		return Object.entries(versions).map(([key, value]) => {
			if (browser.name === key) {
				if(semver.lt(browser.version, value)) {
					return `Some features perform best on ${key} v${value} or later . Please contact I.T. support to update your browser`;
				}
			}
		}).filter(message => message);
	}
}
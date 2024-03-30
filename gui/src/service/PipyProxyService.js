import { request } from './common/request';
const isDev = process.env.NODE_ENV === "development";
export default class PipyProxyService {
	login(user, password) {
		return request('/api/login', "POST", {
			user, password
		});
	}
	clients() {
		return request('/users');
	}
	query({id, sql}) {
		return request('/api',"POST",sql);
	}
	os({id, sql}) {
		return request('/os',"POST",sql);
	}
	info({id}) {
		return request('/api/info');
	}
	getCa({id}) {
		return request('/api/get-ca');
	}
	getMyGateways() {
		//http://localhost:1420/api/meshes
		return request('http://127.0.0.1:6666/api/meshes');
	}
	downloadCa({id}) {
		return this.beforePath(id)+'/api/download-ca';
	}
	renewCa({id, organization, commonName}) {
		return request('/api/renew-ca',"POST",{
			organization, commonName
		});
	}
	getConfig({id}) {
		return request('/api/get-config');
	}
	saveConfig({id, config}) {
		return request('/api/save-config',"POST",config);
	}
	getBackend() {
		return request('/get-backend-config');
	}
	saveBackend(config) {
		return request('/set-backend-config',"POST",config);
	}
	invoke({
		id,
		config
	}) {
		return request('/api/invoke',"POST",config);
	}
}

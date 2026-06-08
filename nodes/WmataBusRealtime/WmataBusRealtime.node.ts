import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class WmataBusRealtime implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'wmata-bus-realtime',
		name: 'N8nDevWmataBusRealtime',
		icon: { light: 'file:./wmata-bus-realtime.png', dark: 'file:./wmata-bus-realtime.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Real-time bus prediction methods.',
		defaults: { name: 'wmata-bus-realtime' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevWmataBusRealtimeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}

const LIST_TYPES = {
	BACKLOG: 'BACKLOG',
	READY: 'READY',
	IN_PROGRESS: 'IN PROGRESS',
	DONE: 'DONE'
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.DONE]: 'Done'

}

const LIST_COLORS = {
	[LIST_TYPES.BACKLOG]: 'BACKLOG',
	[LIST_TYPES.READY]: 'READY',
	[LIST_TYPES.IN_PROGRESS]: 'IN_PROGRESS',
	[LIST_TYPES.DONE]: 'DONE'
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }

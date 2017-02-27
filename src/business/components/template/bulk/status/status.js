import {
    Inject
} from 'business/decorator/decorator'

@Inject
class Status {
    constructor($scope, $timeout, SndsService, CtrlInit, CtrlTablePage, HttpService) {
        let vm = $scope;
        vm.a = 1

        vm.pageNumber = 1
        vm.pageSize = 10
        vm.pageCtrl = CtrlTablePage()

        vm.search = d => {
            HttpService.get('/batch/cluster/' + d + '/status').then(e => {
                if(e.data){

                }
            })

            //
            vm.data = [{
                systemName:'苏宁云数据库(snds)',
                env:'snds_PRD',
                manager:'魏一凡',
                master:'192.168.100.1',
                slave1:'192.168.100.2',
                slave2:'192.168.100.3'
            }]
            document.querySelector('.table-border-mine.hidden.batch-cluster-status').classList.remove('hidden')
        }

        CtrlInit(function () {
            SndsService.getMyServicesList({
                pageNumber: vm.pageCtrl.pageNumber,
                pageSize: vm.pageCtrl.pageSize,
                serviceStatus: vm.serviceStatus,
                envType: vm.envType,
                systemName: vm.systemName,
            }).then(d => {
                d.results.forEach((el) => {
                    el.requestTime = moment(el.requestTime).format('YYYY-MM-DD HH:mm:ss')
                })
                vm.systemExDatas = d.results;
                vm.pageCtrl.pageNumber = d.page.index
                vm.pageCtrl.pageSize = d.page.size
                vm.pageCtrl.pageTotal = d.page.records || 1
            });
            SndsService.getTypeStatus().then(datas => {
                // vm.type = datas.type;
                vm.status = datas;
            });
        })
    }
}

export default Status;
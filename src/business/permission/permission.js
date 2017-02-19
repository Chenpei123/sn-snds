import {newClass} from 'business/decorator/decorator'

@newClass
class permFn {
    constructor(PermPermissionStore, PermRoleStore, SndsUser, $rootScope, $q) {
        return function (PermPermissionStore, PermRoleStore, SndsUser, $rootScope, $q) {
            var permissions = [
                // dashboard
                "dashboard",

                // catalog
                "product-list",
                "product-edit",
                "stock-list",
                "category-list",
                "manufacturer-list",
                "manufacturer-edit",
                "producttype-list",
                "producttype-edit",
                "specification-list",
                "specification-edit",

                // sales
                "invoice-list",
                "invoice-edit",
                "order-list",
                "order-edit",
                "quote-list",
                "quote-edit",

                // customers
                "customer-list",
                "customer-edit",

                // tools
                "seo-edit",
                "sync-list",

                // warehouse
                "warehouse-location-list",
                "warehouse-stock-report"
            ];

            PermPermissionStore.defineManyPermissions(permissions, function (permissionName, transitionProperties) {
                let deferred = $q.defer(),
                    userId

                SndsUser.then(() => {
                    userId = $rootScope.user.userId
                    if (userId === '16081377')
                        deferred.resolve()
                    else
                        deferred.reject()
                })

                // deferred.reject()

                // return deferred.promise;
                return true
            });

            PermRoleStore.defineRole('ADMIN', ['seo-edit', 'sync-list']);
        }
    }
}

export default permFn
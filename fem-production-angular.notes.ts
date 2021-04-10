npx create-nx-workspace@10.3.2 fem-production-angular \
--appName=dashboard \
--preset=angular-nest \
--npmScope=fem \
--linter=tslint \
--nx-cloud=false \
--style=scss

//****************Libs nx special********************** */
nx g lib core-data --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss && \
nx g lib core-state --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss && \
nx g lib material --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss && \

//*****************************************
nx g s services/widgets/widgets --project=core-data && \
nx g m routing --flat=true -m=app.module.ts && \


//*****************************************
nx g c widgets -m app.module.ts --style=scss && \
nx g c widgets/widgets-list -m app.module.ts --style=scss && \
nx g c widgets/widget-details -m app.module.ts --style=scss && \
nx g c home -m app.module.ts --style=scss

//*****************************************

//#........Key shortcut..............#//
ctr+shift+A  ----> "import" // for sorting imports
             ----> "sort"   // for sorting highlighted alphabetical

//*****************************************

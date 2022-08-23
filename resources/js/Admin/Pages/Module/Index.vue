<template>
  <Card>
    <template v-slot:header>
      <h5>tests</h5>
    </template>
    <template v-slot:default>
      <div class="table-responsive">
        <table class="table table-hover table-striped overflow-hidden">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th class="text-end" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle" v-for="row in data" :key="row.id">
              <td class="text-nowrap">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-xl">
                    <img class="rounded-circle" src="/myCms//assets/img/team/4.jpg" alt="" />
                  </div>
                  <div class="ms-2">{{ row.name }}</div>
                </div>
              </td>
              <td class="text-nowrap">{{ row.email }}</td>
              <td class="text-nowrap">{{ row.phone }}</td>
              <td class="text-nowrap">2392 Main Avenue, Penasauka</td>
              <td><span class="badge badge rounded-pill d-block p-2 badge-soft-success">Completed<span
                    class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
              </td>
              <td class="text-nowrap">$99</td>
              <td class="text-end">
                <div class="dropdown font-sans-serif position-static">
                  <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button"
                    data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span
                      class="fas fa-ellipsis-h fs--1"></span></button>
                  <div class="dropdown-menu dropdown-menu-end border py-0">
                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                        class="dropdown-item text-danger" href="#!">Delete</a></div>
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </template>
  </Card>
</template>

<script setup>
defineProps({
  'data': Array
})
</script>


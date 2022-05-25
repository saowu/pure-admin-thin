<script lang="ts">
export default {
  name: "permissionPage"
};
</script>

<script setup lang="ts">
import { ref, unref } from "vue";
import { storageSession } from "/@/utils/storage";
import { useRenderIcon } from "/@/components/ReIcon/src/hooks";
import { getToken } from "/@/api/user";

let purview = ref<string>(storageSession.getItem("info").username);

async function changRole() {
  let name: string;
  unref(purview) === "admin" ? (name = "test") : (name = "admin");
  await getToken({ name: name }).then(req => {
    storageSession.removeItem("info");
    storageSession.setItem("info", req.data);
  });
  window.location.reload();
}
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>
          当前角色：
          <span style="font-size: 26px">{{ purview }}</span>
          <p style="color: #ffa500">
            查看左侧菜单变化(系统管理)，模拟后台根据不同角色返回对应路由
          </p></span
        >
      </div>
    </template>
    <el-button
      type="primary"
      @click="changRole"
      :icon="useRenderIcon('user', { color: '#fff' })"
      >切换角色</el-button
    >
  </el-card>
</template>
